
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { summary, description, email, priority } = req.body;

    if (!summary || !description) {
        return res.status(400).json({ error: 'Summary and description are required.' });
    }

    // Environment Variables
    const JIRA_URL = process.env.JIRA_API_URL || 'https://jiralive.nexon.com';
    const JIRA_TOKEN = process.env.JIRA_API_TOKEN;
    const JIRA_PROJECT = process.env.JIRA_PROJECT_KEY || 'GSB';
    const JIRA_ISSUE_TYPE = process.env.JIRA_ISSUE_TYPE || 'Bug'; // Default to Bug based on user input

    if (!JIRA_TOKEN) {
        return res.status(500).json({ error: 'Server misconfiguration: Missing Jira Token' });
    }

    // Construct Description with Reporter info
    const fullDescription = `
${description}

--------------------
*Reporter Contact:* ${email || 'Anonymous'}
*Submitted via:* SaaS Landing Support Page
    `.trim();

    const payload = {
        fields: {
            project: {
                key: JIRA_PROJECT
            },
            summary: summary,
            description: fullDescription,
            issuetype: {
                name: JIRA_ISSUE_TYPE // Using 'name' (e.g. 'Bug', 'Task', '버그')
            }
            // Add priority if needed, but keeping simple for now
        }
    };

    try {
        const response = await fetch(`${JIRA_URL}/rest/api/2/issue`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${JIRA_TOKEN}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Jira API Error:', response.status, errorText);
            return res.status(response.status).json({
                error: 'Failed to create ticket',
                jiraError: errorText
            });
        }

        const data = await response.json();
        return res.status(200).json({
            success: true,
            key: data.key,
            id: data.id,
            self: data.self
        });

    } catch (error) {
        console.error('API Handler Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}

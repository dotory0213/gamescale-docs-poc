import React, { useState, useEffect, useRef } from 'react';

const Sandbox = () => {
    const [gameState, setGameState] = useState('OFFLINE'); // OFFLINE, LOBBY, MATCH
    const [logs, setLogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const logsEndRef = useRef(null);

    const scrollToBottom = () => {
        logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [logs]);

    const addLog = (method, endpoint, status, data) => {
        const timestamp = new Date().toLocaleTimeString();
        setLogs(prev => [...prev, { timestamp, method, endpoint, status, data }]);
    };

    const handleLogin = async () => {
        setIsLoading(true);
        addLog('POST', '/api/v1/auth/login', 'PENDING', { region: 'KR', device_id: 'win_x64_123' });

        setTimeout(() => {
            setGameState('LOBBY');
            setIsLoading(false);
            addLog('POST', '/api/v1/auth/login', '200 OK', {
                token: 'eyJhbGciOiJIUzI1Ni...',
                user_id: 'user_8829',
                nickname: 'GameScale_Dev'
            });
        }, 800);
    };

    const handleMatchmaking = async () => {
        if (gameState !== 'LOBBY') return;
        setIsLoading(true);
        addLog('POST', '/api/v1/matchmaking/queue', 'PENDING', { mode: 'ranked', region: 'KR' });

        setTimeout(() => {
            setGameState('MATCH');
            setIsLoading(false);
            addLog('POST', '/api/v1/matchmaking/queue', '200 OK', {
                match_id: 'mt_99281',
                server_ip: '10.20.30.40',
                port: 7777
            });
        }, 1200);
    };

    const handleLeaveMatch = () => {
        setIsLoading(true);
        addLog('DELETE', '/api/v1/matchmaking/session', 'PENDING', { match_id: 'mt_99281' });

        setTimeout(() => {
            setGameState('LOBBY');
            setIsLoading(false);
            addLog('DELETE', '/api/v1/matchmaking/session', '204 No Content', {});
        }, 500);
    };

    const handleLogout = () => {
        setGameState('OFFLINE');
        addLog('POST', '/api/v1/auth/logout', '200 OK', {});
    };

    return (
        <div className="flex flex-col h-full bg-grey-900 rounded-xl overflow-hidden shadow-2xl border border-grey-800">
            {/* Toolbar / Header */}
            <div className="bg-grey-800 px-4 py-2 flex items-center justify-between border-b border-grey-700">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-grey-400 text-xs font-mono">GameScale Client Simulator v1.0.0</div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row h-[600px]"> {/* Fixed height for visual consistency */}

                {/* DevTools Overlay / Control Panel */}
                <div className="w-full md:w-96 bg-grey-900 border-r border-grey-800 flex flex-col font-mono text-sm">
                    {/* Controls */}
                    <div className="p-4 border-b border-grey-800">
                        <h3 className="text-grey-400 text-xs font-bold uppercase tracking-wider mb-3">Actions</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {gameState === 'OFFLINE' && (
                                <button
                                    onClick={handleLogin}
                                    disabled={isLoading}
                                    className="col-span-2 py-2 px-4 bg-primary hover:bg-primary-dark text-white rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Login
                                </button>
                            )}
                            {gameState === 'LOBBY' && (
                                <>
                                    <button
                                        onClick={handleMatchmaking}
                                        disabled={isLoading}
                                        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors disabled:opacity-50"
                                    >
                                        Find Match
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        disabled={isLoading}
                                        className="py-2 px-4 bg-grey-700 hover:bg-grey-600 text-white rounded transition-colors disabled:opacity-50"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                            {gameState === 'MATCH' && (
                                <button
                                    onClick={handleLeaveMatch}
                                    disabled={isLoading}
                                    className="col-span-2 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded transition-colors disabled:opacity-50"
                                >
                                    Leave Match
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Console Output */}
                    <div className="flex-1 flex flex-col overflow-hidden bg-[#0d1117]">
                        <div className="px-4 py-2 bg-grey-800 text-grey-400 text-xs flex justify-between items-center">
                            <span>Network Log</span>
                            <button onClick={() => setLogs([])} className="hover:text-white">Clear</button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
                            {logs.length === 0 && (
                                <div className="text-grey-600 text-center mt-10 italic">
                                    No network activity.
                                    <br />Trigger an action to see API logs.
                                </div>
                            )}
                            {logs.map((log, index) => (
                                <div key={index} className="animate-fadeIn">
                                    <div className="flex gap-2 mb-1">
                                        <span className="text-grey-500">[{log.timestamp}]</span>
                                        <span className={`font-bold ${log.method === 'POST' ? 'text-green-400' :
                                            log.method === 'DELETE' ? 'text-red-400' : 'text-blue-400'
                                            }`}>{log.method}</span>
                                        <span className="text-grey-300">{log.endpoint}</span>
                                    </div>
                                    <div className={`pl-2 border-l-2 ${log.status === 'PENDING' ? 'border-yellow-500/50' : 'border-grey-700'
                                        }`}>
                                        <div className="mb-1">
                                            <span className={`px-1.5 py-0.5 rounded text-[10px] ${log.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-500' :
                                                'bg-green-500/20 text-green-500'
                                                }`}>{log.status}</span>
                                        </div>
                                        {Object.keys(log.data).length > 0 && (
                                            <pre className="text-grey-400 overflow-x-auto">
                                                {JSON.stringify(log.data, null, 2)}
                                            </pre>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={logsEndRef} />
                        </div>
                    </div>
                </div>

                {/* Game Viewport */}
                <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
                    {/* Background Grid Animation */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>

                    {/* Game State Visualization */}
                    <div className="text-center z-10 transition-all duration-500">
                        {isLoading && (
                            <div className="mb-4">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                                <p className="text-primary mt-4 font-mono text-sm animate-pulse">CONNECTING INT...</p>
                            </div>
                        )}

                        {!isLoading && gameState === 'OFFLINE' && (
                            <div className="animate-fadeIn">
                                <div className="text-6xl mb-4">🎮</div>
                                <h1 className="text-3xl font-bold text-white mb-2 tracking-widest uppercase">Cyber Arena</h1>
                                <p className="text-grey-500 text-sm font-mono">PRESS LOGIN TO START</p>
                            </div>
                        )}

                        {!isLoading && gameState === 'LOBBY' && (
                            <div className="animate-fadeIn">
                                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded-full mb-4 border border-green-500/50">● ONLINE</span>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-grey-800 rounded-full mx-auto mb-4 border-2 border-primary overflow-hidden">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=GameScale" alt="Avatar" className="w-full h-full" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">GameScale_Dev</h2>
                                    <p className="text-grey-500 text-xs">Level 99 • Rank S</p>
                                </div>
                            </div>
                        )}

                        {!isLoading && gameState === 'MATCH' && (
                            <div className="animate-fadeIn w-64 bg-grey-800/80 backdrop-blur rounded-lg p-6 border border-grey-700">
                                <div className="flex justify-between items-center mb-4 border-b border-grey-600 pb-2">
                                    <span className="text-red-400 font-bold">RED TEAM</span>
                                    <span className="text-white font-mono">12 : 10</span>
                                    <span className="text-blue-400 font-bold">BLUE TEAM</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-grey-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-red-500 w-[60%] animate-pulse"></div>
                                    </div>
                                    <p className="text-xs text-grey-400 font-mono text-left">Capturing Point A...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sandbox;

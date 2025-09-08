const userMusicData = [
    {
        userId: "USER-001",
        userName: "Ramya Krishnan",
        listeningSessions: [
            {
                date: "2024-08-20",
                songsPlayed: [
                    { songId: "SONG-101", artist: "S.P.Balasubrahmanyam", genre: "Classical", durationSeconds: 210 },
                    { songId: "SONG-102", artist: "Sid Sriram", genre: "Melody", durationSeconds: 195 },
                    { songId: "SONG-103", artist: "Armaan Malik", genre: "Pop", durationSeconds: 180 }
                ]
            },
            {
                date: "2024-08-21",
                songsPlayed: [
                    { songId: "SONG-101", artist: "S.P.Balasubrahmanyam", genre: "Classical", durationSeconds: 210 },
                    { songId: "SONG-104", artist: "Devi Sri Prasad", genre: "Dance", durationSeconds: 225 }
                ]
            }
        ]
    },
    {
        userId: "USER-002",
        userName: "Kiran Kumar",
        listeningSessions: [
            {
                date: "2024-08-20",
                songsPlayed: [
                    { songId: "SONG-105", artist: "Thaman", genre: "Mass", durationSeconds: 200 },
                    { songId: "SONG-106", artist: "Anirudh", genre: "Mass", durationSeconds: 240 }
                ]
            }
        ]
    }
];

function makeListenerReport(userMusicData) {
   
    const totalUsers = userMusicData.length;

  
    let totalListeningTimeSeconds = 0;
    let favoriteGenres = {};
    let userStats = [];

    
    userMusicData.forEach(user => {
        let userTotalSongs = 0;
        let userTotalTime = 0;

        
        user.listeningSessions.forEach(session => {
            session.songsPlayed.forEach(song => {
                
                totalListeningTimeSeconds += song.durationSeconds;

                
                userTotalSongs++;
                userTotalTime += song.durationSeconds;

                favoriteGenres[song.genre] = (favoriteGenres[song.genre] || 0) + 1;
            });
        });
        userStats.push({
            userId: user.userId,
            userName: user.userName,
            totalSongsPlayed: userTotalSongs,
            totalListeningTime: userTotalTime
        });
    });

    let mostActiveUser = userStats.reduce((maxUser, currentUser) => {
        return currentUser.totalSongsPlayed > maxUser.totalSongsPlayed? currentUser: maxUser;
    });

    return {
        totalUsers,
        totalListeningTimeSeconds,
        favoriteGenres,
        mostActiveUser
    };
}

console.log(makeListenerReport(userMusicData));

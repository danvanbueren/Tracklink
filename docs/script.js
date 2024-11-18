async function fetchLatestCommit() {
    const username = 'danvanbueren';
    const repo = 'Tracklink';
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
      const response = await fetch(apiUrl);
      const commits = await response.json();
      if (commits.length > 0) {
        const latestCommit = commits[0];
        const message = latestCommit.commit.message;
        const authorUsername = latestCommit.author.login;
        const authorAvatar = latestCommit.author.avatar_url;
        const commitDate = new Date(latestCommit.commit.author.date);
        const commitUrl = latestCommit.html_url;
        const sha = latestCommit.sha.substring(0, 7);

        const timeAgo = timeSince(commitDate);

        document.getElementById('commit-message').textContent = message;
        document.getElementById('commit-message').href = commitUrl;

        document.getElementById('commit-author').innerHTML = `
          <a href="https://github.com/${authorUsername}" target="_blank">${authorUsername}</a> committed ${timeAgo}
        `;

        document.getElementById('avatar-link').href = `https://github.com/${authorUsername}`;
        document.getElementById('avatar-image').src = authorAvatar;

        document.getElementById('commit-hash').textContent = sha;
        document.getElementById('commit-hash').href = commitUrl;
      } else {
        document.getElementById('commit-container').innerHTML = '<p>No commits found</p>';
      }
    } catch (error) {
      document.getElementById('commit-container').innerHTML = '<p>Error fetching commit info</p>';
      console.error(error);
    }
  }

  function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
      const amount = Math.floor(seconds / interval.seconds);
      if (amount >= 1) return `${amount} ${interval.label}${amount > 1 ? "s" : ""} ago`;
    }

    return "just now";
  }

  fetchLatestCommit();
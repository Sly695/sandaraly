module.exports = {
  apps: [
    {
      name: 'sandaraly',
      script: 'npm',
      args: 'PORT=5001 start',
      interpreter: 'none',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

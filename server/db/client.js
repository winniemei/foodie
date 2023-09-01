// Require Client from pg
const { Client } = require('pg');

// Establishing connection to database
const cookbook = 'cookbook';
const client = new Client (`http://localhost:5432/${cookbook}`);

// Export for use in other files
module.exports = client;
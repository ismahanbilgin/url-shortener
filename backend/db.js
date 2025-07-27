require('dotenv').config();
const { Client } = require('pg');

// PostgreSQL bağlantı ayarları .env dosyasından alınacak
const client = new Client();

async function testConnection() {
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Bağlantı başarılı! Sunucu saati:', res.rows[0].now);
  } catch (err) {
    console.error('Bağlantı hatası:', err);
  } finally {
    await client.end();
  }
}

testConnection();
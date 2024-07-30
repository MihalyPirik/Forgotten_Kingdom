const cron = require('node-cron');
const { Op } = require('sequelize');
const Player = require('../models/player');

cron.schedule('0 0 * * *', async () => {
  try {
    await Player.update(
      { resetPasswordToken: null, resetPasswordExpires: null, newPassword: null },
      {
        where: {
          resetPasswordExpires: {
            [Op.lt]: Date.now()
          }
        }
      }
    );
    console.log('Lejárt jelszó visszaállítási token-ek sikeresen törölve.');
  } catch (error) {
    console.error('Hiba történt a lejárt token-ek törlése során:', error);
  }
});
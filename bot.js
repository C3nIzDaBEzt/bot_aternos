const mineflayer = require('mineflayer');

// Tạo bot kết nối đến server Aternos của bạn
const bot = mineflayer.createBot({
  host: 'Cenisdabezt.aternos.me',  
  port: 60645,                    
  username: 'AfKbOt',             
  version: '1.21.4'                
});

bot.on('spawn', () => {
  console.log('Bot đã vào game!');

  function printBotPosition() {
    const pos = bot.entity.position;  
    console.log(`Tọa độ của bot: x=${pos.x.toFixed(2)}, y=${pos.y.toFixed(2)}, z=${pos.z.toFixed(2)}`);
  }
  setInterval(printBotPosition, 10000);

  




  async function moveBot() {
    if (bot.entity.onGround) {
      bot.setControlState('forward', true);
      bot.setControlState('jump', true); 
      await bot.waitForTicks(1000);
      bot.setControlState('forward', false);
      bot.setControlState('left',true);
      await bot.waitForTicks(1000);
      bot.setControlState('left',false);
      bot.setControlState('back',true);
      await bot.waitForTicks(1000);
      bot.setControlState('back',false);
      bot.setControlState('right',true);
      await bot.waitForTicks(1000);
      bot.setControlState('right',false);
      bot.setControlState('forward',true);
    } else {
      // Nếu đang trên không
      bot.setControlState('jump', true);;
      bot.setControlState('forward',false);
    }
  }

  setInterval(moveBot, 300);
});

bot.on('error', (err) => {
  console.log('Lỗi:', err);
});

bot.on('end', () => {
  console.log('Bot bị ngắt kết nối!');
});

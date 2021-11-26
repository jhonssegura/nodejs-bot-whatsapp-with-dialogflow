const venom = require('venom-bot');
const { start } = require('../controllers/Chat');

const sessions = async () => {

  //crear una lista de sessiones 

  console.log("primera instancia");
  const principalClient = await venom.create({
    session: 'principal', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })

  start(principalClient);

};

module.exports = {
  sessions
}
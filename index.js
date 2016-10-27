const { init } = require('./EC2RoleCredentials');

init().then(data => {
  console.log('EC2 Role Credentials')
  console.log(data);
}).catch((err) => {
  console.log(err);
});

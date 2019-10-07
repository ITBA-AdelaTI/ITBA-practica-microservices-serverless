Volver a ir a https://www.awseducate.com/signin/SiteLogin y autenticarse con las credenciales del workshop anterior.

Ir a la consola de AWS dentro del classroom

Una vez en la consola de AWS, crear una nueva máquina virtual del tipo Amazon Linux 2 AMI (HVM), SSD Volume Type y conectarse a la misma (recuerden el tema de las keys y cómo convertirlas a un formato que PuTTy entienda). Recuerden también que para autenticarse tienen que poner ec2-user@dirección ip

Apenas puedan conectarse a la VM, introducir los siguientes comandos
```
sudo yum update
sudo yum install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install node
npm install -g serverless
npm install -g nodemon
```
# recuperaçao de senha
**RF (Requisitos Funcionais)**
- O usuario deve poder recuperar sua senha infornamdo seu e-mail;
- O usuario deve receber um e-mail com instruções de recuperação de senha;
- O usuario deve poder resetar a senha

**RNF (Requisitos Nao Funcionais)**
- Utilizar MailTrap para testar envios em desenvolvimento;
- Urilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano
**RN (Regras de negócios)**
- O link enviado por email para resetar a senha, deve expirar em 2hs;
- Ousuario precisa confirmar a nova senha ao resetar a mesma

# Atualizaçao de perfil
**RF**
- Usuario deve poder atualizar seu perfil(nome/senha);

**RG**
- usuario nao pode alterar seu email para um email já existente;
- Para atualizar a senha, usuario deve informar a senha antiga;
- Para atualizar a senha, usuario precisa confirmar a nova senha;

# painel do prestador
**RF**
- O usuario deve poder listar seu agendamentos de um dia específico;
- O prestador dee receber um notificaçao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçoes nao lidas;

**RNF**
- Os agendamentos do prestador no dia devem ser armazenagos em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**
- A notificacao deve ter um status de lida/nao lida para que o prestador possa controlar;

# Agendamento de serviços
**RF**
- Usuario deve poder listar todos prestadores de serviços cadastrados;
- O usuario deve poder listar os dias de um Mes com pelo menos um horario siponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestadorr;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve duarar 1h exatamente;
- Os agendamentos devem estar disponíveis entre as 8h e 18h(primeiro as 8h ultimo as 17h);
- O usuario nao pode agendar um hr já ocupado;
- O usuario não pode agendar um horario que já passou;
- O usuario nao pode agendar serviços consigo mesmo;


var messages = [
    "Surpresa! Te amo muito!",
    "Você é minha luz!",
    "Meu coração é seu!",
    "Você é meu mundo!",
    "Não consigo parar de pensar em você!",
    "Juntos para sempre!",
    "Espero que tenha gostado desse presente",
    "Você é sol que ilumina meus dias",
    "Nosso amor foi o maior presente de Deus",
    
  ];
  
  document.getElementById('btn1').addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var messageText = messages[randomIndex];
    
    var message = document.createElement('div');
    message.classList.add('alert-message');
    message.innerHTML = '<span class="heart-icon"></span> ' + messageText;
    
    document.querySelector('.content').appendChild(message);
  });
//главный файл

//функция при загрузке страницы
function start(){
	//cоздание блока старта
	sozdanieStartBlock();
	//создание таймера
	sozdanieTimerBlock();
	//нажатие на кнопку старта
	startKnopka.onclick = nachat;
}
//функция, которая выполняется при начале
function nachat(){
	status = "nachat";
	//удаление стартового блока
	udalenieStartBlock();
	//создание блока очков
	sozdanieStarsBlock();
	//создание жизней
	sozdanieLifesBlock();
	//создание мяча
	sozdanieBall();
	//создание таймера
	timerIgra();
}

start();


//остановка игры
function stopIgra(){
	status = "koniec";
	//удаление блока жизней
	udalenieLifesBlock();
	//удаление блока очков
	udalenieStarsBlock();
	//удаление таймера
	udalenieTimerBlock()
	//очищение поля 
	ochistitIgraPole();
	//конец игры
	sozdanieKoniecIgra();	
}

	
function timerIgra(){
	//таймер отсчета конца игры
	var chasy = setInterval(function () {
		//отнятие 1 от значения таймера ежесекундно
	timerBlock.innerText = timerBlock.innerText - 1;
		//сли таймер на 0
		if(timerBlock.innerText == 0){
			//функция остановки игры
			stopIgra();
			//остановка таймера
			clearInterval(chasy);	
			//таймер снова на 10
			timerBlock.innerText = 10;
		}
	},1000)
	}
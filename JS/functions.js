/*------------------------------------------------------------*/
//функции 

//старт игры
	function startIgra(){
	//создание шарика
	sozdanieBall();
}
	/*function timerIgra(){
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
	}*/


//создание шарика и добавление элемента
function sozdanieBall(){
	 //блок div
	var ball = document.createElement("div");
	 //добавляем в игровое поле igra
	 //id шарика
	 ball.className = "ball";

	 var napravlenie = random(2);

	 if(napravlenie == 1){
	 	ball.className = "ball left";
	 } else{
	 	ball.className = "ball right";
	 }
	 


	 ball.onmousemove = function(){
	 	
	 	if(ball.className != "ball ojidaet-udaleniya"){
			//добавление очков
			ochki = ochki + ochkiRandom(5) + 1;
			stars.innerText = ochki;
			//прозрачность шарика
			ball.style.opacity = "0";

			//создание нового шарика
			setTimeout(function(){
				//удаление предыдущего
				ball.remove();
				//выбирается ранее созданный шарик. Если его нет, то эта переменная пустая 
				var suschestvuetBall = document.querySelector(".ball");
				if(suschestvuetBall == null){
					//сколько шариков должно быть
					var kolichestvoBall = random(3);
					//сколько есть на текущий момент
					var tekuscheeColichestvoBall = 0;
					while(tekuscheeColichestvoBall < kolichestvoBall) {
					//шарик на поле 
					sozdanieBall();
					tekuscheeColichestvoBall = tekuscheeColichestvoBall + 1;
					}

				} 

				
	
		
			},200)//конец onclick
		}
		ball.className = "ball ojidaet-udaleniya" ;
	}
	

	//задание координатов шарикам
	setTimeout(function(){
		ball.style.top = random(350) + "px";
		ball.style.left = random(350) + "px";
	},200)

	//падение шарика 
	setTimeout(function(){
		//ускорение изменения элемента
		ball.style.transition = "all 0s"
		//через время ширик опускается со скоростью Х px/Y ms
		var timerBall = setInterval(function(){
			//X px
			ball.style.top = ball.offsetTop + 2 + "px";
			//удаление шарика при его выходе за границы
			if (ball.offsetTop > 500) {
				//удаление шарика
				ball.remove();
				//создание нового шарика
				sozdanieBall();
				//отнятие жизни
				colichestvoLifes = colichestvoLifes - 1;
				///заканчивать игру, если не осталось жизней
				if (colichestvoLifes == 0){
					stopIgra();
				}
				//обновление кол-ва жизней
				udalenieLifesBlock();
				sozdanieLifesBlock();
				//удаляем таймер
				clearInterval(timerBall);
			}
			//Y ms
		}, 10)
		//время, через которое шарик будет опускаться
	},1000)

		//проверка. Если игра окончена, шарик не создается
		if(status != "koniec"){
		igraPole.appendChild(ball)
		}
	}

/**/

//рандомное место для шарика
function random(max){
	//cлучайное число от 0 до максимума
	var sluchaynoeChislo = 1 + Math.random() * (max + 1);
	//округление числа
	sluchaynoeChislo = Math.floor(sluchaynoeChislo);
	//возвращение значения
	return sluchaynoeChislo;
}


function ochkiRandom (max){
	//3адание случайного значения 
	var sluchaynoeOchko = Math.random() * (max + 1); 
	//округление
	sluchaynoeOchko = Math.floor(sluchaynoeOchko);
	//возвращение значения
	return sluchaynoeOchko;
}


/*==================================================
создание элементов игры
==================================================*/
/*<div id="start-block">
	<button id="start-knopka">Start</button>
</div>*/
function sozdanieStartBlock(){
	// cоздание <div id="start-block">
	startBlock = document.createElement("div");
	startBlock.id = "start-block"

	//созданиие кнопки <button id="start-knopka">Start</button>
	startKnopka = document.createElement("button");
	startKnopka.id = "start-knopka";
	startKnopka.innerText = "Start";

	//добавляем кнопку в div
	startBlock.appendChild(startKnopka);
	//добавляем блок старта на игровое поле
	igraPole.appendChild(startBlock);
}


//создание очков и добавление элемента
function sozdanieStarsBlock(){
	 //блок div
	 stars = document.createElement("div");
	 stars.id = "stars";
	 //внутренний текст 
	stars.innerText = 0;
	 //добавляем в игровое поле igra
	 igraPole.appendChild(stars); 
}



/*<div id="lifes">	
</div>*/
//создание жизней
function sozdanieLifesBlock(){
	//создание элемента
	lifes = document.createElement("div");
	lifes.id = "lifes";
	//кол-во шариков на данный момент
	var tekuscheeColichestvoLifes = 0;

	while(tekuscheeColichestvoLifes < colichestvoLifes){
		var span = document.createElement("span");
		lifes.appendChild(span);
		tekuscheeColichestvoLifes = tekuscheeColichestvoLifes + 1;
	}
	igraPole.appendChild(lifes);
}


//функция для блока таймера
function sozdanieTimerBlock (){
	//заголовок с текстом внутри
	var h2 = document.createElement("h2");
	h2.innerText = "Time: ";

	//в timerBlock добавляем span
	timerBlock = document.createElement("span");
	//span id
	timerBlock.id = "timer";
	//значение таймера
	timerBlock.innerText = "20";

	//добавляем span в h2
	h2.appendChild(timerBlock);
	//добавляем заголовок в infoBlock
	infoBlock.appendChild(h2);
}


/*<div id="koniec-igra">
	<h2>Game over!</h2>
	<h3>You reached score 100 points</h3>
</div>*/
//создаем блок конца игры
function sozdanieKoniecIgra(){
	//создаем блок <div id="koniec-igra"></div>
	var div = document.createElement("div");
	//id блока
	div.id = "koniec-igra";

	//создаем h2
	var h2 = document.createElement("h2");
	h2.innerText = "Игра окончена!"

	//создем h3
	var h3 = document.createElement("h3");
	h3.innerText = "Вы собрали " + ochki + " монет";

	//кнопка для перезапуска игры
	var startAgain = document.createElement("button");
	startAgain.id = "start-again";
	startAgain.innerText = "Играть снова!";
	//функция для перезапуска страницы при нажатии на кнопку
	startAgain.onclick = function(){
		location.reload();
	}



	//добавление в блок h2 
	div.appendChild(h2);
	//добавление в блок h3
	div.appendChild(h3);
	//добавление в блок кнопки старта  
	div.appendChild(startAgain);
	//добавление на игровое  поле блока конца игры
	igraPole.appendChild(div);


}


/*===================================================
Удаление элементов
=====================================================*/
//удалять стартовый блок
function udalenieStartBlock(){
	//удаляем блок старта
	startBlock.remove();
}


//удалять жизни
function udalenieLifesBlock(){
	//удаление блока жизней
	lifes.remove();	
}


//удалять очки
function udalenieStarsBlock(){
	//удаление блока жизней
	stars.remove();	
}


//удалять таймер
function udalenieTimerBlock(){
	//удаление блока таймера
	infoBlock.remove();
}


//очистить поле игры
function ochistitIgraPole(){
	igraPole.innerText = "";
}
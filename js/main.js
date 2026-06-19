const audioButton = document.querySelector('.audio_control');

const startCronometer = document.getElementById('start-cron');
const startCountdown = document.getElementById('start-count');
const startInterval = document.getElementById('start-interval');
const reset = document.getElementById('reset');
const beast = document.getElementById('beast');
const clock = document.getElementById('bigClock');


const resetButtons = function(){
    shutdownAnimation(false);
    tickingsecs.play();
    (document.querySelectorAll(".bottombox")).forEach((el) => el.classList.remove("active"));
    startCronometer.innerText = 'START';
    startCountdown.innerText = 'COUNT';
    if (startInterval) startInterval.innerText = 'INTERVAL';
    reset.innerText = 'RESET';
    beast.innerText = 'RACING';
}
let cronActive = false;


// Controls


audioButton.addEventListener('click', function(){
    nervAudio();
    let buttonImg = document.querySelector('.audio_control img');
    if (tickingsecs.volume() == 0) {
        buttonImg.src = 'images/audio-off.svg';
    } else {
        buttonImg.src = 'images/audio-on.svg';
    }
    audioButton.classList.toggle('active');
}, false);


startCronometer.addEventListener('click', function(){
    resetButtons();
    if (!cronActive || nervCron.berserk) {
        nervCron.reset();
        nervClock.active = false;
        console.log(nervClock.active,' inactivo?')
        nervCron.start(0, 'cronometer');
        cronActive = true;
        this.innerText = 'PAUSE';
        startCountdown.innerText = 'COUNT';
    } else {
        nervCron.stop();
        this.innerText = 'START';
        cronActive = false;
    }
    this.classList.add('active');
    
}, false);

// Controls

beast.addEventListener('click', function(){
    resetButtons();
    this.classList.add('glitch');
    console.error(`
    .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, *  . ,,,.,,.,,.......................                               
    .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,./.   .,,,,,,,,,.....................                                
    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, *              ...,,,...,..........                                  
    ,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,                         ,.,,,,,,,..                                    
    ,******,,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,./*******//*/**.////         ,,,,,,,                                      
    ,,**,******,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*******/*****  .     */       .,,,                                        
    ,***************,**,,,*,,,,,,,,,,,,,,,,,,,,,,,,              @@@@@@@@.  /                                                 
    ,*******************,,,,**,,,,,,,,,,,,,,,,,,,. .//*.         ./&@@@@@@  *//                                               
    ,*********/%%%#.***************,,,,,*,,,,,,,, /*/******//*    .     .            .                                        
    ,**********%%%%%%%%( ,********,,,,,,,,*,*,,,****,////*,*/*****//*.             .    .                                     
    ,*********,%%%%%%%%%     .*************,,*,,*/.,,.///*,**,.//***/****/ */, .     .   .                                    
    ,/********,%%%%%%%%/        .*********,***.///.,,.,*,,,,,,    ,*/.*/**////*.///.    */.                                   
    ,/********,%%%%%%%%           ***********./****,,////.,,,      //,,,*//,./****/*//.                                       
    *///////*/,%%%%%%%(          ..************,,*/**.   %/#%..*%, ///// ,//,.%%%.(%%%%#,.    ...  .                          
    */////////*%%%%%%%             ****************,/.,@@@@@@@@@%#///,    /*,,#...,,,,....%% ,.  ....                         
    /((((//////%%%%%%%             ************,(%%(..*#@#@@@( @@@%@&#%%%*///,*%           (  ./**// ..                       
    /((((((((((%%%%%%,            . ***//***.%%%...,,..  ,%#%%(## /@@*@@&/%%# /*///////////*   .*////**/...                   
    /((((((((((%%%%%%               ///   .%%*.,,.      . ... .&        *.&   // //***///*//,   ./*///***/*/          ..  ... 
    /##((((((((%%%%%*               * .....#%#     */*****/,.,.(@.%*,&%,@%       *//***,       . .*////////**,      ..........
    /#######(((%%%%%               ,/**///*//.//,./**////**%%%#%@#&@&&//,*/,.        /,       ....*////////     . ............
    (##########%%%%,              ///////////////////*///.@%@@@%@@@@@,.//*/,,             ........./,//,    ........... ......
    (###########%%%               //*//////////////////.,.@@@@@**&/,, ///,/,*,**  *      ....  ....,//, ....................,,
    (########/*#%%                   ////////*/.. ////,/,,,. ,,,  //**.,,,*,*,**  **,       *...   .*/ .............,.....,.,,
    */*********(%.                   .,***. .******,   /,/,/.   , ////,,,./,****  ****.      */*...   ..............,,,,..,,,,
    ,**********                      . **********,     ,/,**,.*,,*.//*,,/.******  *****,      .///*... .....,,,,,,,,,,,,.,,,**
    ,********,*                       .*******,,         /*/.,,*,,,,,,,.,*******, *******       //*//...  ...     .,,,,,. ****
    ,**********                       ..*****,          ,*******,*,****(********  ********       //////*... .... .  . ,*, *,  
    ,**********                       . ****            ///******//*/.*********  **********       .////  **....  .    ..      
    .,,,*******.                       .**              ##//////*/,***********  ************.         * .//////,...  .....    
    .,*********.                       .                %%///////**********  .******************/.       ///////////,..  ...  
    .,*****,,,..                       .               .%%(////(**********  *************************                  ,  ....
    .,,*,.....                          .             ,%%%%///*,********** ,***********************,  *******    *////////////
     .....                              .            /*%%%%*/*.**********, **********************  .************  /*//////////
    ....                                ..          //%%%%%#*.. *********  ***********           *****************, ,/////////
                                         .         */,%%%%/** ** ******** ********/               *******************   ,*////
                         ............    .     ./    #%%,****. * ,******. ******       ..               .***************      
                      ////,.......        .  .//  **********,  *. *****, ,**/      /////*//*,.......           ***********.
    `);
    nervCron.reset();
    nervClock.active = false;
    theBeast.play();
    nervCron.start(5, 'countdown');
    cronActive = true;
    nervCron.berserk = true;
    this.classList.add('active');
    
}, false);

startCountdown.addEventListener('click', function(){
    
    resetButtons();
    nervCron.reset();
    cronActive = false;
    duration = window.prompt('Set minutes: ', 5);
    console.log('duration',duration);
    
    if (duration < 1) {
        window.alert('Default to 1 minute');
        duration = 1;
    }
    if (isNaN(duration)  || duration === null ) {
        if (!cronPaused) {
            window.alert(`Incorrect number format, "${duration}" is not acceptable.`);
            nervCron.reset();
            nervClock.start();
            return;

        }
    } 
    if (duration > 60) {
        window.alert('More than an hour visuals not yet implemented.');
        nervCron.reset();
        nervClock.start();
        return;
    }
    nervCron.reset();
    nervCron.start(duration, 'countdown');
    this.classList.add('active');

}, false);

reset.addEventListener('click', function(){
    if (nervClock.active) {
        return;
    }
    nervCron.reset();
    nervCron.onComplete = null;

    resetButtons();
    this.classList.add('active');

    cronActive = false;
    intervalModeActive = false;

    // タイトル表示を復元
    document.querySelector('.clocktitleimg').style.display = 'block';
    const activityTitle = document.getElementById('activityTitle');
    if (activityTitle) activityTitle.style.display = 'none';

    setTimeout(() => {
        this.classList.remove('active');
    }, 1000);
}, false);

clock.addEventListener('click', function(){
    nervCron.reset();
    nervCron.onComplete = null;
    nervClock.start();
    savedCuntdown = false;
    resetButtons();
    cronActive = false;
    intervalModeActive = false;

    // タイトル表示を復元
    document.querySelector('.clocktitleimg').style.display = 'block';
    const activityTitle = document.getElementById('activityTitle');
    if (activityTitle) activityTitle.style.display = 'none';
}, false);

// インターバルタイマーのデータと制御
let intervalList = [
    { name: '漢字', duration: 5 },
    { name: '計算', duration: 5 }
];
let currentIntervalIndex = 0;
let intervalModeActive = false;

const intervalModal = document.getElementById('intervalModal');
const intervalListContainer = document.getElementById('intervalList');
const newIntervalNameInput = document.getElementById('newIntervalName');
const newIntervalTimeInput = document.getElementById('newIntervalTime');
const addIntervalBtn = document.getElementById('addIntervalBtn');
const startIntervalBtn = document.getElementById('startIntervalBtn');
const closeIntervalBtn = document.getElementById('closeIntervalBtn');

function renderIntervalList() {
    if (!intervalListContainer) return;
    intervalListContainer.innerHTML = '';
    intervalList.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'interval-item';
        div.innerHTML = `
            <span>${index + 1}. ${item.name} (${item.duration}分)</span>
            <button class="remove-btn" onclick="removeInterval(${index})">削除</button>
        `;
        intervalListContainer.appendChild(div);
    });
}

window.removeInterval = function(index) {
    intervalList.splice(index, 1);
    renderIntervalList();
};

if (addIntervalBtn) {
    addIntervalBtn.addEventListener('click', () => {
        const name = newIntervalNameInput.value.trim() || `活動 ${intervalList.length + 1}`;
        const duration = parseInt(newIntervalTimeInput.value) || 5;

        intervalList.push({ name, duration });
        newIntervalNameInput.value = '';
        renderIntervalList();
    });
}

if (closeIntervalBtn) {
    closeIntervalBtn.addEventListener('click', () => {
        intervalModal.style.display = 'none';
    });
}

if (startIntervalBtn) {
    startIntervalBtn.addEventListener('click', () => {
        if (intervalList.length === 0) {
            alert('活動を1つ以上追加してください。');
            return;
        }
        intervalModal.style.display = 'none';
        startIntervalChain();
    });
}

if (startInterval) {
    startInterval.addEventListener('click', () => {
        if (!intervalModeActive) {
            resetButtons();
            showIntervalModal();
        } else {
            // 中止
            nervCron.reset();
            nervCron.onComplete = null;
            intervalModeActive = false;
            resetButtons();
            
            // タイトル表示を復元
            document.querySelector('.clocktitleimg').style.display = 'block';
            const activityTitle = document.getElementById('activityTitle');
            if (activityTitle) activityTitle.style.display = 'none';
        }
    });
}

function showIntervalModal() {
    if (intervalModal) {
        intervalModal.style.display = 'flex';
        renderIntervalList();
    }
}

function startIntervalChain() {
    intervalModeActive = true;
    currentIntervalIndex = 0;
    if (startInterval) {
        startInterval.innerText = 'PAUSE';
        startInterval.classList.add('active');
    }
    runNextInterval();
}

function runNextInterval() {
    if (currentIntervalIndex >= intervalList.length) {
        // すべてのインターバル完了
        intervalModeActive = false;
        resetButtons();
        
        // タイトル表示を復元
        document.querySelector('.clocktitleimg').style.display = 'block';
        const activityTitle = document.getElementById('activityTitle');
        if (activityTitle) activityTitle.style.display = 'none';
        
        shutdown.play();
        alert('すべての活動が完了しました！');
        return;
    }

    const currentItem = intervalList[currentIntervalIndex];
    
    // 活動名表示を更新
    const titleImg = document.querySelector('.clocktitleimg');
    const activityTitle = document.getElementById('activityTitle');
    if (titleImg) titleImg.style.display = 'none';
    if (activityTitle) {
        activityTitle.style.display = 'block';
        activityTitle.innerText = `活動：${currentItem.name}`;
    }

    nervCron.reset();
    
    // 次のインターバルへのコールバックを設定
    nervCron.onComplete = () => {
        currentIntervalIndex++;
        runNextInterval();
    };

    nervCron.start(currentItem.duration, 'countdown');
}


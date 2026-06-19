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
    nervCron.start(300, 'countdown');
    cronActive = true;
    nervCron.berserk = true;
    this.classList.add('active');
    
}, false);

startCountdown.addEventListener('click', function(){
    
    resetButtons();
    nervCron.reset();
    cronActive = false;
    let durationInput = window.prompt('設定時間 (例 5:00 または 秒数 90): ', '5:00');
    if (durationInput === null) return;
    
    let totalSeconds = 0;
    if (durationInput.includes(':')) {
        const parts = durationInput.split(':');
        const minutes = parseInt(parts[0]) || 0;
        const seconds = parseInt(parts[1]) || 0;
        totalSeconds = (minutes * 60) + seconds;
    } else {
        totalSeconds = parseInt(durationInput) || 0;
    }
    
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        window.alert('無効な時間です。');
        nervCron.reset();
        nervClock.start();
        return;
    }
    
    if (totalSeconds > 3600) {
        window.alert('1時間以上のタイマー表示には現在対応していません。');
        nervCron.reset();
        nervClock.start();
        return;
    }
    
    nervCron.reset();
    nervCron.start(totalSeconds, 'countdown');
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
    const activityTitle = document.getElementById('activityTitle');
    if (activityTitle) activityTitle.style.display = 'none';
}, false);

// インターバルタイマーのデータと制御
let intervalList = [
    { name: '漢字', duration: 300 },
    { name: '計算', duration: 300 }
];
let currentIntervalIndex = 0;
let intervalModeActive = false;
let intervalLoopActive = false;

const intervalModal = document.getElementById('intervalModal');
const intervalListContainer = document.getElementById('intervalList');
const newIntervalNameInput = document.getElementById('newIntervalName');
const newIntervalMinInput = document.getElementById('newIntervalMin');
const newIntervalSecInput = document.getElementById('newIntervalSec');
const loopIntervalCheckbox = document.getElementById('loopInterval');
const addIntervalBtn = document.getElementById('addIntervalBtn');
const startIntervalBtn = document.getElementById('startIntervalBtn');
const closeIntervalBtn = document.getElementById('closeIntervalBtn');

function renderIntervalList() {
    if (!intervalListContainer) return;
    intervalListContainer.innerHTML = '';
    intervalList.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'interval-item';
        
        const min = Math.floor(item.duration / 60);
        const sec = item.duration % 60;
        const timeText = (min > 0 ? `${min}分` : '') + (sec > 0 ? `${sec}秒` : (min === 0 ? '0秒' : ''));
        
        div.innerHTML = `
            <span>${index + 1}. ${item.name} (${timeText})</span>
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
        const min = parseInt(newIntervalMinInput.value) || 0;
        const sec = parseInt(newIntervalSecInput.value) || 0;
        const duration = (min * 60) + sec;

        if (duration <= 0) {
            alert('時間を設定してください。');
            return;
        }

        intervalList.push({ name, duration });
        newIntervalNameInput.value = '';
        newIntervalMinInput.value = '0';
        newIntervalSecInput.value = '30';
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
        intervalLoopActive = loopIntervalCheckbox ? loopIntervalCheckbox.checked : false;
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
        if (intervalLoopActive && intervalList.length > 0) {
            currentIntervalIndex = 0;
            alarm.play();
            runNextInterval();
            return;
        }
        
        // すべてのインターバル完了
        intervalModeActive = false;
        resetButtons();
        
        // タイトル表示を復元
        const activityTitle = document.getElementById('activityTitle');
        if (activityTitle) activityTitle.style.display = 'none';
        
        shutdown.play();
        alert('すべての活動が完了しました！');
        return;
    }

    const currentItem = intervalList[currentIntervalIndex];
    
    // 活動名表示を更新
    const activityTitle = document.getElementById('activityTitle');
    if (activityTitle) {
        activityTitle.style.display = 'block';
        activityTitle.innerText = currentItem.name;
    }

    nervCron.reset();
    
    // 次のインターバルへのコールバックを設定
    nervCron.onComplete = () => {
        currentIntervalIndex++;
        runNextInterval();
    };

    nervCron.start(currentItem.duration, 'countdown');
}

// フルスクリーン制御と自動フィッティング
const fullscreenButton = document.querySelector('.fullscreen_control');

if (fullscreenButton) {
    fullscreenButton.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
}

document.addEventListener('fullscreenchange', () => {
    const icon = document.querySelector('.fullscreen_control svg');
    if (!icon) return;
    if (document.fullscreenElement) {
        // フルスクリーン中のアイコン（縮小表示）に変更
        icon.innerHTML = '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>';
    } else {
        // 通常のアイコン（拡大表示）に戻す
        icon.innerHTML = '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>';
    }
});

// 画面サイズに合わせて#wrapperのスケールを動的に算出する
function adjustScale() {
    const wrapper = document.getElementById('wrapper');
    if (!wrapper) return;
    
    const targetWidth = 800;
    const targetHeight = 480;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const scaleX = windowWidth / targetWidth;
    const scaleY = windowHeight / targetHeight;
    
    // アスペクト比を維持して最大フィットし、少しの余白を持たせる
    const scale = Math.min(scaleX, scaleY) * 0.95;
    
    wrapper.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', adjustScale);
window.addEventListener('load', adjustScale);
// 初期実行
adjustScale();


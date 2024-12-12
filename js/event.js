$(function() {
    let imageWidth = $(".eveTXT li img").outerWidth();
    let gap = 40;

    // eventDateil 영역 시작
    setInterval(function() {
        $(".eveTXT").css("transition", "transform 2s ease-in-out");
        $(".eveTXT").css("transform", "translateX(-" + (imageWidth + gap) + "px)");

        setTimeout(function() {
            $(".eveTXT li:first-child").appendTo(".eveTXT");  
            $(".eveTXT").css("transition", "none");
            $(".eveTXT").css("transform", "translateX(0)"); 

            setTimeout(function() {
                $(".eveTXT").css("transition", "transform 2s ease-in-out");
            }, 50); 
        }, 3000); 
    }, 4000);

    // eventDateil 영역 끝

    //eventCard 영역 시작
    const prevBtn = document.querySelector('.bnprev');
    const nextBtn = document.querySelector('.bnnext');
    const images = document.querySelectorAll('.eventCardImg li');
    const cardDetails = document.querySelectorAll('.cardDetail li');
    let currentIndex = 1; // 초기값은 가운데 이미지
    
    // 이미지와 카드에 이동 효과를 주는 함수
    function updateCards() {
        images.forEach((img, index) => {
            img.style.transition = 'transform 0.5s ease'; // 이미지 이동 효과
    
            // 각 이미지를 이동시키는 조건
            if (index === currentIndex) {
                // 현재 이미지는 중앙
                img.classList.add('eventCardImgCenter');
                img.classList.remove('eventCardImgLeft', 'eventCardImgRight');
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
                // 이전 이미지는 왼쪽
                img.classList.add('eventCardImgLeft');
                img.classList.remove('eventCardImgCenter', 'eventCardImgRight');
            } else if (index === (currentIndex + 1) % images.length) {
                // 다음 이미지는 오른쪽
                img.classList.add('eventCardImgRight');
                img.classList.remove('eventCardImgLeft', 'eventCardImgCenter');
            } else {
                // 나머지 이미지는 숨김
                img.classList.remove('eventCardImgLeft', 'eventCardImgCenter', 'eventCardImgRight');
            }
        });
    
        // cardDetail opacity와 위치 조정
        cardDetails.forEach((card, index) => {
            card.style.transition = 'opacity 1s ease, transform 1s ease';
            if (index === currentIndex) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)'; // 카드는 보이고 중앙에 위치
            } else {
                card.style.opacity = 0;
                card.style.transform = 'translateY(90%)'; // 나머지 카드 숨김
            }
            });
        }
        
        // 이전 버튼 클릭 시
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCards();
        });
        
        // 다음 버튼 클릭 시
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCards();
        });
        
        // 초기 상태 설정
        updateCards();
        
    //eventCard 영역 끝
});

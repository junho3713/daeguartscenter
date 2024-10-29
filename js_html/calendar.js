// 9월 날짜 데이터 생성
const daysInSeptember = 30;
const firstDayOfSeptember = 0; // 일요일(0)

const daysContainer = document.querySelector('.days');

// 빈 칸 추가 (9월 1일 전의 공백)
for (let i = 0; i < firstDayOfSeptember; i++) {
    const emptyDiv = document.createElement('div');
    daysContainer.appendChild(emptyDiv);
}

// 9월 날짜 추가
for (let day = 1; day <= daysInSeptember; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    dayDiv.addEventListener('click', () => {
        document.querySelectorAll('.days div').forEach(d => d.classList.remove('selected'));
        dayDiv.classList.add('selected');
    });
    daysContainer.appendChild(dayDiv);
}
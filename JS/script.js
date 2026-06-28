let currentBtn = 'all';
const activeBtn = ['text-white','bg-linear-to-r','from-blue-500','to-blue-700'];
const inactiveBtn = ['bg-white', 'text-black'];

// all , interview,and rejected section
const allCardSection = document.getElementById('all-cards')
const interviewCardSection = document.getElementById('interview-filter-section');
const rejectedCardSection = document.getElementById('rejected-filter-section');
const emptyJobSection = document.getElementById('empty-job-section')
function switchBtn(Btn){
    const btns = ['all','interview','rejected'];
     currentBtn = Btn;
    for (const btn of btns) {
        const btnName = document.getElementById(btn);
        if(btn===Btn){
            btnName.classList.remove(...inactiveBtn);
            btnName.classList.add(...activeBtn);
        }
        else{
            btnName.classList.remove(...activeBtn);
            btnName.classList.add(...inactiveBtn);
        }
    }
    const sections = [allCardSection,interviewCardSection,rejectedCardSection]
    for (const section of sections) {
        section.classList.add('hidden');
    }
    emptyJobSection.classList.add('hidden');
    if(Btn ==='all'){
        allCardSection.classList.remove('hidden');
      if(allCardSection.children.length<1){
        emptyJobSection.classList.remove('hidden');
      }
    }
    else if(Btn==='interview'){
        interviewCardSection.classList.remove('hidden');
        if(interviewCardSection.children.length<1){
        emptyJobSection.classList.remove('hidden');
      }    
    }
    else{
        rejectedCardSection.classList.remove('hidden');
         if(rejectedCardSection.children.length<1){
        emptyJobSection.classList.remove('hidden');
      }
    }
    updateCount();
}

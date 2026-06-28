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
// counting total ,interview and rejected section;
const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')
const jobCount = document.getElementById('job-count');
totalCount.innerText = allCardSection.children.length;
interviewCount.innerText = interviewCardSection.children.length;
rejectedCount.innerText = rejectedCardSection.children.length;


// adding Eventlistener to main so that we can access dynamically to all section
const  mainContainer = document.querySelector('main');
mainContainer.addEventListener('click',function(event){
    const eventName = event.target;
    const card = eventName.closest(".card-container");
    const cardParent = card.parentNode;
    const status = card.querySelector('.status');
    if(eventName.classList.contains('interview-btn')){
       interviewCardSection.appendChild(card);
       status.innerText = 'Interview'
       status.classList.add('border' ,'border-green-500','bg-white', 'px-4', 'py-1', 'rounded-md', 'text-green-500','text-md');
    }
     if(eventName.classList.contains('rejected-btn')){
        rejectedCardSection.appendChild(card);
        status.innerText = 'Rejected'
       status.classList.add('border' ,'border-red-500','bg-white', 'px-4', 'py-1', 'rounded-md', 'text-red-500','text-md');
    }
    if(eventName.parentNode.classList.contains('delete-btn')){
        cardParent.removeChild(card);
    }
    updateCount()
})
function updateCount(){
    // totalCount.innerText = allCardSection.children.length;
    // interviewCount.innerText = interviewCardSection.children.length;
    // rejectedCount.innerText = rejectedCardSection.children.length;
    
const counts = {
    all:allCardSection.children.length,
    interview:interviewCardSection.children.length,
    rejected:rejectedCardSection.children.length
};
totalCount.innerText = counts.all;
interviewCount.innerText = counts.interview
rejectedCount.innerText = counts.rejected;
jobCount.innerText = counts[currentBtn];
if(counts[currentBtn] <1){
   emptyJobSection.classList.remove('hidden'); 
}
else{
    emptyJobSection.classList.add('hidden');
}
}
updateCount();
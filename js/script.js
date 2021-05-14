// Icon toggler
const humbergerBtn = document.querySelector('.links .icon');
const sections = document.querySelector('.links .sections');
humbergerBtn.addEventListener('click', function(){
    this.classList.toggle('open');

    if (this.classList.contains('open')) {
        sections.classList.add('show');
    } else {
        sections.classList.remove('show');
    }
})
    // Window Loading
    $(window).on('load', function(){

        $('body').css('overflow','auto')
        $('.loading-overlay').fadeOut()
    });
    
    // Filter All Projects
    const projectLinks = document.querySelectorAll('.projects-links li');
    const projectsContent = document.querySelector('.projects .content');
    const projectsContentItem = Array.from(projectsContent.children);
    projectLinks.forEach(item => {
        item.addEventListener('click', function(){
            
            projectLinks.forEach(item => item.classList.remove('active'))
            item.classList.add('active');

            const dataLink = item.getAttribute('data-link');
            
            projectsContentItem.forEach(box =>{

                const dataBox = box.getAttribute('data-item');
                if (dataLink === dataBox || dataLink === 'all') {
                    
                    box.style.opacity = '1';
                    box.style.transform = 'scale(1)';
                    box.style.display = 'block';
                } else {
                    box.style.opacity = '0'
                    box.style.transform = 'scale(0)';
                    box.style.display = 'none';
                }
            })
        })
    })
    
    // Trigger Testimonials Section Owl Carousel
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    
    AOS.init();

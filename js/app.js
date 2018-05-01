const pageURL = window.location.href;

// build homepage project thumbnail items
const buildProjectThumb = (thumbnail) => {
    const thumbContainer = document.getElementById('thumbnails');
    
    let thumbHTML = '<a href="projects/' + thumbnail.url + '"><div class="thumb_overlay"></div>';
    thumbHTML += '<img src="imgs/thumbs/' + thumbnail.thumb + '" alt="' + thumbnail.name + '" /></a>';
    thumbHTML += '<div class="project-info"><h3>' + thumbnail.name + '</h3><p>' + thumbnail.title + '</p></div>';
    
    const thumb = document.createElement('li');
    thumb.className = "thumbnail";
    thumb.innerHTML = thumbHTML;
    thumbContainer.appendChild(thumb);
}

// build project tab sub nav item
const buildProjectNav = (project) => {
    const projectNav = document.getElementById('projectNav');
    let navHTML = "";
    if (pageURL.includes("projects") ) {
        navHTML = '<a href="'+ project.url + '">' + project.menu + '</a>';
    } else {
        navHTML = '<a href="projects/' + project.url + '">' + project.menu + '</a>';
    }
    
    const navItem = document.createElement('li');
    navItem.innerHTML = navHTML;
    projectNav.appendChild(navItem);
}

// populate project sub navigation & homepage thumbnails
for (let i = 0; i < projects.length; i++) {
    if (pageURL.includes("index") ||  pageURL === "http://edmonterrubio.com/") { 
        buildProjectThumb(projects[i]);
    }
    buildProjectNav(projects[i]);
}


// portfolio nav dropdown
$('#portfolioTab').hover(function() {
    $('.sub_nav').stop(true,true).slideDown();
}, function() {
    $('.sub_nav').stop(true,true).hide();
});


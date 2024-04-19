function topscroll (locate) {
    window.scrollTo({
        top: Number(locate),
        behavior: 'smooth'
    })
}

export default topscroll;
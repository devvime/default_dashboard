class Raven {

    static render(component) {
        $("#root").html(component)
    }

    static include(target, component) {
        $(target).html(component)
    }

}

export default Raven
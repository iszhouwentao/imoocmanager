export const type = {
    SWITCH_MENU
}

export function changeMenu(menuName){
    return {
        type:type.SWITCH_MENU,
        menuName
    }

}
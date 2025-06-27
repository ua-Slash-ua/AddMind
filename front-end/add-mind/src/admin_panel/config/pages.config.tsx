class PagesConfigAP{
    HOME:string = '/admin-panel'
    USER:string = this.HOME + '/user'
    USER_EDIT = (id: string | number): string => `${this.USER}/${id}/edit`
}
export const PAGES_AP = new PagesConfigAP()
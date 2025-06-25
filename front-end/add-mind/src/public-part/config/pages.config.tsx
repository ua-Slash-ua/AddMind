class PagesConfig{
    HOME:string = '/'
    LIBRARY:string = this.HOME + 'library'
    MANAGER:string = this.HOME + 'manager'
}
export const PAGES = new PagesConfig()
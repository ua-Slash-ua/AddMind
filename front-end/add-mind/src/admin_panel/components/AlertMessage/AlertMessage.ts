'use client'
export function AlertMessage(msg:string){
    const alertContainer = document.getElementById('alert_message_container')
    if(!alertContainer) return
    const alertMsg = alertContainer.querySelector('.alert_message_content')!.querySelector('p')!
    alertMsg.textContent = msg
    alertContainer.style.display = 'block'
}
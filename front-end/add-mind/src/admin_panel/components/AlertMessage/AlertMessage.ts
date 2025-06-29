'use client'
import {hexToRgba} from "@/admin_panel/helper_func/hexToRgb";

const dataUser = {
    success: {
        name: 'Успішно!',
        iconSvg: '✅',
        mainColor: '#0f5132',    // темно-зелений текст
    },
    warning: {
        name: 'Увага!',
        iconSvg: '⚠️',
        mainColor: '#664d03',    // темно-жовтий текст
    },
    info: {
        name: 'Інформація:',
        iconSvg: 'ℹ️',
        mainColor: '#055160',    // темно-блакитний текст
    },
    error: {
        name: 'Помилка!',
        iconSvg: '❌',
        mainColor: '#842029',    // темно-червоний текст
    },
    criticalError: {
        name: 'Критична помилка!!!',
        iconSvg: '💥',
        mainColor: '#5f0f15',    // бордовий текст
    },
};

type alertMsg = {
    message: string
    status: 'success' | 'warning' | 'info' | 'error' | 'criticalError'
    time: number
}

export function AlertMessage(msg: alertMsg['message'], status: alertMsg['status'] = 'info',) {
    let time: alertMsg['time'] = 3
    let data = dataUser[status]
    const alertContainer = document.getElementById('AM_container')

    if (!alertContainer) return

    //
    const alertIcon = alertContainer.querySelector('#AM_icon')!
    alertIcon.innerHTML = data.iconSvg

    //
    const alertTitle = alertContainer.querySelector('#AM_title')!
    alertTitle.textContent = data.name

    //
    const alertMsg: HTMLDivElement = alertContainer.querySelector('#AM_content')!
    alertMsg.textContent = msg

    //
    const alertHeader = document.getElementById('AM_header')!
    alertHeader.style.backgroundColor = hexToRgba(data.mainColor, 0.5)
    const alertLoader = document.getElementById('AM_loader')!

    alertLoader.style.backgroundColor = data.mainColor

    alertMsg.style.borderLeft = `5px solid ${hexToRgba(data.mainColor, 0.8)}`


    // alertLoader :HTMLDivElement для завантаження
    alertContainer.style.display = 'block';



    console.log(alertLoader.style)
    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, time * 990);
}
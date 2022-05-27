import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    refresh: number = 1;
    showNotificationWithoutTimer(from, align, colortype, icon, text, time?: number)
    {
        if (!time) {
            time = 3000;
        }
        $.notify({
            icon: icon,
            message: text
        }, {
            type: colortype,
            timer: time,
            placement: {
                from: from,
                align: align
            }
        });
    }

    showNotification(from, align, colortype, icon, text, time?: number) {
        if (!time) {
            time = 3000;
        }
        this.showNotificationWithoutTimer(from, align, colortype, icon, text, time);
       if(time && time>0) 
       {
        setTimeout(() => {
            return this.refreshFonct();
        }, time);
       }

    }
    refreshFonct() {
        if (this.refresh == 1) {
            window.location.reload();
            this.refresh = 0;
        }
    }
}

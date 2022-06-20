import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrGenerationComponent } from './qr-generation/qr-generation.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'scan',
      pathMatch: 'full'
    },
    {
        path: 'scan',
        component: QrScanComponent,
    },
    {
        path: 'generation',
        component: QrGenerationComponent,
    },
    {
      path: '**',
      redirectTo: 'scan',
      pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QrCodeRoutingModule { }

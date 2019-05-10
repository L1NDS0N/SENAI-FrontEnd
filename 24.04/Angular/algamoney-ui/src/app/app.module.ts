import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'primeng/components/tooltip/tooltip'
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasCadastroComponent,
    PessoasPesquisaComponent,
    MessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    CurrencyMaskModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    InputTextareaModule,
    InputMaskModule,
    SelectButtonModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

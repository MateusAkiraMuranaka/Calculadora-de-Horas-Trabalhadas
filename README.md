# Calculadora-de-Horas-Trabalhadas
Projeto em Node de uma calculadora de horas trabalhadas

Histórias de Usuário:

UC 1: Como um funcionário, quero inserir meu horário de início e término de trabalho para calcular as horas trabalhadas no dia.
Critérios de Aceitação:
O sistema deve permitir a inserção de horários no formato HH:mm.
O sistema deve exibir um erro se o formato não for HH:mm.
O sistema deve calcular corretamente as horas trabalhadas entre os dois horários.
Definition of Done:
Função de inserção de horários implementada.
Validação de formato HH:mm implementada.
Testes unitários para cálculo de horas trabalhadas concluídos.

UC 2: Como um funcionário, quero inserir a duração do meu intervalo de almoço para que seja descontado do total de horas trabalhadas.
Critérios de Aceitação:
O sistema deve permitir a inserção de uma duração de intervalo no formato HH:mm
O sistema deve descontar a duração do intervalo do total de horas trabalhadas.
Definition of Done:
Função de inserção de intervalo implementada.
Lógica de desconto de intervalo no cálculo implementada.
Testes unitários para desconto de intervalo concluídos.

UC 3: Como um funcionário, quero ter a flexibilidade de inverter os horários de início e término e ainda obter o cálculo correto das horas trabalhadas.
Critérios de Aceitação:
O sistema deve calcular corretamente as horas trabalhadas mesmo se o horário de término for anterior ao horário de início.
Definition of Done:
Lógica de inversão de horários implementada.
Testes unitários para cenários de inversão de horários concluídos.

UC 4: Como um funcionário, quero inserir horários sem a necessidade de um ":" para que a inserção seja mais rápida e prática.
Critérios de Aceitação:
O sistema deve aceitar horários no formato H:mm ou HHmm.
O sistema deve interpretar corretamente os horários inseridos sem ":".
Definition of Done:
Função de interpretação de horários sem ":" implementada.
Testes unitários para formatos H:mm e HHmm concluídos.



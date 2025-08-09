/**
 * Formata uma data (string ISO ou objeto Date) para um formato legível em português do Brasil.
 * Lida com o problema de fuso horário, tratando a data como UTC para evitar erros de "um dia a menos".
 * @param date A data a ser formatada, que pode ser uma string, um objeto Date, nula ou indefinida.
 * @returns A data formatada como "dd de Mês de aaaa" (ex: "26 de julho de 2025"), ou uma mensagem padrão.
 */
export function formatEventDate(
  date: string | Date | null | undefined
): string {
  if (!date) {
    return "Data não definida";
  }

  // Cria um objeto Date a partir da string ou do objeto Date recebido.
  const dateObj = new Date(date);

  // O input de data HTML e a base de dados podem devolver a data com um fuso horário UTC (Z).
  // Para evitar que a data mude ao formatar (ex: dia 26 à meia-noite UTC virar dia 25 no Brasil),
  // usamos os métodos getUTC* para extrair os componentes da data.
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth(); // Mês é baseado em zero (0 = Janeiro)
  const day = dateObj.getUTCDate();

  // Cria uma nova data garantidamente em UTC para a formatação final.
  // Isto assegura que a formatação não fará ajustes de fuso horário.
  const utcDate = new Date(Date.UTC(year, month, day));

  return utcDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC", // Especifica que a formatação deve usar o tempo UTC
  });
}

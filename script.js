// ======================================
// CONFIGURAÇÃO DO WHATSAPP
// ======================================

const telefoneFotografa = "5535998171123";


// ======================================
// INICIALIZAÇÃO
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // MENU MOBILE
    // ======================================

    const menuMobile = document.getElementById("menuMobile");
    const header = document.querySelector(".header");

    if (menuMobile && header) {

        menuMobile.addEventListener("click", () => {

            header.classList.toggle("menu-open");

            if (header.classList.contains("menu-open")) {
                menuMobile.textContent = "✕";
            } else {
                menuMobile.textContent = "☰";
            }

        });


        const linksMenu =
            header.querySelectorAll(".nav a");

        linksMenu.forEach(link => {

            link.addEventListener("click", () => {

                header.classList.remove("menu-open");

                menuMobile.textContent = "☰";

            });

        });

    }


    // ======================================
    // FAQ
    // ======================================

    const perguntas = document.querySelectorAll(".faq-question");

    perguntas.forEach(pergunta => {

        pergunta.addEventListener("click", () => {

            const item = pergunta.parentElement;

            item.classList.toggle("active");

            const simbolo = pergunta.querySelector("span");

            if (simbolo) {

                simbolo.textContent =
                    item.classList.contains("active")
                        ? "−"
                        : "+";

            }

        });

    });

    // ======================================
// FORMATAÇÃO DO TELEFONE
// ======================================

const campoWhatsapp =
    document.getElementById("whatsapp");

if (campoWhatsapp) {

    campoWhatsapp.addEventListener("input", () => {

        let numero =
            campoWhatsapp.value.replace(/\D/g, "");

        numero = numero.substring(0, 11);

        if (numero.length <= 2) {

            campoWhatsapp.value =
                numero;

        } else if (numero.length <= 7) {

            campoWhatsapp.value =
                `(${numero.substring(0, 2)}) ${numero.substring(2)}`;

        } else {

            campoWhatsapp.value =
                `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7)}`;

        }

    });

}

    // ======================================
    // BOTÕES "TENHO INTERESSE"
    // ======================================

    const botoesInteresse =
        document.querySelectorAll(".interesse");

    botoesInteresse.forEach(botao => {

        botao.addEventListener("click", event => {

            event.preventDefault();


            const formulario =
                document.getElementById("orcamento");

            const campoPacote =
                document.getElementById("pacote");

            const campoServico =
                document.getElementById("servico");


            // Dados do pacote escolhido

            const pacote =
                botao.dataset.servico || "";

            const categoria =
                botao.dataset.categoria || "";


            // Preenche o serviço quando possível

            if (campoServico) {

                if (
                    categoria.toLowerCase()
                        .includes("esportiva")
                ) {

                    campoServico.value = "Esportivo";

                }

            }


            // Seleciona o pacote correspondente

            if (campoPacote && pacote) {

                const opcoes =
                    campoPacote.querySelectorAll("option");

                opcoes.forEach(opcao => {

                    if (
                        opcao.value
                            .toLowerCase()
                            .startsWith(pacote.toLowerCase())
                    ) {

                        campoPacote.value =
                            opcao.value;

                    }

                });

            }


            // Vai para o formulário

            if (formulario) {

                formulario.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ======================================
    // FORMULÁRIO DE ORÇAMENTO
    // ======================================

    const formulario =
        document.getElementById("budgetForm");

    if (formulario) {

        formulario.addEventListener("submit", event => {

            event.preventDefault();


            const nome =
                document.getElementById("nome")?.value || "";

            const whatsapp =
                document.getElementById("whatsapp")?.value || "";

            const servico =
                document.getElementById("servico")?.value || "";

            const pacote =
                document.getElementById("pacote")?.value || "";

            const dataCampo =
                document.getElementById("data");

            const local =
                document.getElementById("local")?.value || "";

            const observacoes =
                document.getElementById("observacoes")?.value || "";


            // ======================================
            // DATA NO PADRÃO BRASILEIRO
            // ======================================

            let data = "";

            if (dataCampo?.value) {

                const partes =
                    dataCampo.value.split("-");

                if (partes.length === 3) {

                    data =
                        `${partes[2]}/${partes[1]}/${partes[0]}`;

                }

            }


            // ======================================
            // MENSAGEM DO WHATSAPP
            // ======================================

            const mensagem =
`Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
Meu WhatsApp: ${whatsapp}
Serviço: ${servico}
Pacote: ${pacote}
Data desejada: ${data}
Local: ${local}
Observações: ${observacoes}`;


            // ======================================
            // LINK DO WHATSAPP
            // ======================================

            const url =
                `https://wa.me/${telefoneFotografa}?text=${encodeURIComponent(mensagem)}`;


            window.open(url, "_blank");

        });

    }


    // ======================================
    // POP-UP DO WHATSAPP
    // ======================================

    const whatsappButton =
        document.querySelector(".whatsapp-button");

    const whatsappModal =
        document.getElementById("whatsappModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalLater =
        document.getElementById("modalLater");

    const modalBudget =
        document.getElementById("modalBudget");


    if (whatsappButton && whatsappModal) {


        // Abrir pop-up

        whatsappButton.addEventListener("click", event => {

            event.preventDefault();

            whatsappModal.classList.add("active");

        });


        // Fechar

        function fecharModal() {

            whatsappModal.classList.remove("active");

        }


        if (modalClose) {

            modalClose.addEventListener(
                "click",
                fecharModal
            );

        }


        if (modalLater) {

            modalLater.addEventListener(
                "click",
                fecharModal
            );

        }


        // Fechar clicando fora

        whatsappModal.addEventListener("click", event => {

            if (event.target === whatsappModal) {

                fecharModal();

            }

        });


        // Ir para orçamento

        if (modalBudget) {

            modalBudget.addEventListener("click", event => {

                event.preventDefault();

                fecharModal();


                setTimeout(() => {

                    const formularioOrcamento =
                        document.getElementById("orcamento");

                    if (formularioOrcamento) {

                        formularioOrcamento.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }, 300);

            });

        }

    }


    // ======================================
    // VER MAIS PACOTES
    // ======================================

    const botoesMaisPacotes =
        document.querySelectorAll(".more-packages-button");


    botoesMaisPacotes.forEach(botao => {

        const target =
            botao.dataset.target;

        const pacotes =
            document.getElementById(target);

        if (!pacotes) {
            return;
        }


        botao.addEventListener("click", () => {

            const aberto =
                pacotes.classList.contains("active");


            pacotes.classList.toggle("active");


            if (aberto) {

                botao.innerHTML =
                    'Ver mais pacotes <span>+</span>';

            } else {

                botao.innerHTML =
                    'Ocultar pacotes <span>−</span>';

            }

        });

    });

});
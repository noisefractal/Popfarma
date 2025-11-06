# PopFarma

Aplicativo mobile desenvolvido para a disciplina Soluções Computacionais, do curso de Engenharia de Software da Universidade Católica de Brasília.  

O PopFarma tem como objetivo oferecer uma experiência de compra de medicamentos e produtos farmacêuticos prática, segura e confiável, reunindo todas as etapas da compra em um ambiente digital intuitivo — desde o login até a entrega final com acompanhamento em tempo real.

---

##  Visão e Escopo

Atualmente, clientes enfrentam dificuldades em processos como autenticação, escolha de produtos, finalização de pedidos, cadastro de endereços e acompanhamento da entrega.  
O PopFarma resolve esses problemas ao centralizar todo o fluxo da compra dentro do app, garantindo rapidez, transparência e confiabilidade.

O sistema permite que apenas usuários cadastrados possam acessar suas contas, respeitando a exclusividade de e-mails e garantindo senhas seguras.  
O aplicativo gerencia estoque, carrinho de compras, pagamentos e entregas de forma automática e integrada.

  Escopo Inclui:
- Autenticação de usuários (login seguro)
- Cadastro e seleção de múltiplos endereços
- Adição de produtos ao carrinho
- Pagamentos via cartão ou PIX
- Atualização de status de entrega
- Histórico de pedidos e notificações

**Escopo Exclui (nesta versão):**
- Programas de fidelidade  
- Cupons de desconto  
- Suporte via chat  
- Gestão avançada de estoque interno  

---

# Funcionalidades Principais

  # 1. Adicionar produtos ao carrinho
- Adicionar medicamentos e produtos disponíveis em estoque.  
- Exibição de mensagens como “Produto adicionado com sucesso” ou “Produto indisponível”.  
- Atualização automática do valor total.

  # 2. Login e autenticação
- Login com e-mail único e senha válida.  
- Mensagens claras para erro de senha ou usuário inexistente.  
- Sugestão de criação de conta para novos usuários.

  # 3. Pagamentos
- Opções de pagamento com cartão de crédito/débito ou PIX.  
- Validação de cartão antes da aprovação.  
- PIX com QR Code e confirmação bancária.  
- Pagamentos recusados impedem conclusão do pedido.

  # 4. Endereço de entrega
- Cadastro e seleção de múltiplos endereços.  
- Validação de campos obrigatórios (rua, número, bairro, cidade e CEP).  
- Bloqueio de finalização se o endereço for inválido.

  # 5. Acompanhamento de entrega
- Status automáticos:  
  - “Em preparação”  
  - “Em rota de entrega”  
  - “Entregue”  
- Histórico de pedidos e opção de avaliação.  
- Notificações automáticas de atualização de status.

---

  # Regras de Negócio (RN)

| Código | Descrição | Categoria |
|:------:|------------|-----------|
| RN01 | Login obrigatório com e-mail e senha cadastrados | Autenticação |
| RN02 | E-mail do usuário deve ser único | Autenticação |
| RN03 | Senha deve possuir no mínimo 8 caracteres com letras e números | Autenticação |
| RN04 | Produtos só podem ser adicionados se houver estoque | Produtos |
| RN05 | Quantidade mínima 1 unidade; máxima conforme estoque | Produtos |
| RN06 | Medicamentos controlados exigem receita digital válida | Produtos |
| RN07 | Carrinho atualiza valor total automaticamente | Carrinho |
| RN08 | Pedido só pode ser confirmado após pagamento e endereço válidos | Carrinho |
| RN09 | Bloquear finalização se algum item estiver indisponível | Carrinho |
| RN10 | Validar dados do cartão antes de processar pagamento | Pagamento |
| RN11 | PIX só confirma pedido após confirmação bancária | Pagamento |
| RN12 | Pagamentos recusados impedem conclusão | Pagamento |
| RN13 | Usuário pode cadastrar múltiplos endereços | Entrega |
| RN14 | Endereços devem conter rua, número, bairro, cidade e CEP | Entrega |
| RN15 | Atualização automática do status de entrega | Entrega |
| RN16 | Pedidos concluídos armazenados no histórico do usuário | Histórico |
| RN17 | Envio de notificações sobre mudanças no status | Notificações |

---

  # Requisitos Não Funcionais (RNF)

| Código | Descrição | Categoria |
|:------:|------------|-----------|
| RNF01 | Carregar lista de produtos em até 3 segundos | Desempenho |
| RNF02 | Processamento de pagamento em até 5 segundos | Desempenho |
| RNF03 | Senhas criptografadas no banco de dados | Segurança |
| RNF04 | Comunicação segura via HTTPS | Segurança |
| RNF05 | Pagamentos via gateway confiável | Segurança |
| RNF06 | Interface intuitiva: concluir pedido em até 5 passos | Usabilidade |
| RNF07 | Mensagens de erro claras e informativas | Usabilidade |
| RNF08 | Layout responsivo para diferentes tamanhos de tela | Usabilidade |
| RNF09 | Histórico e dados persistem após falhas | Confiabilidade |
| RNF10 | Compatível com Android 10+ e iOS 13+ | Compatibilidade |

---

  # Tecnologias Utilizadas

- **React Native** (ou Expo)
- **TypeScript**
- **Node.js / Express (backend futuro)**
- **Git & GitHub** (versionamento)
- **HTTPS** (comunicação segura)

---

## 🚀 Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/noisefractal/Popfarma.git

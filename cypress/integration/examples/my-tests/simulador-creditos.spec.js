describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Calcular costo de credito', () =>{
        it('Should calculate credit cost correctly', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
            

            cy.get('#dispDate').type('05/05/2020')
            cy.get('#creditSimulator').click({force: true})
            cy.get('#creditAmount').clear().type('20000')
            cy.get('#paymentMethod').select('Mensual')
            cy.get('#period').select('2 años')
            cy.get('#rate').clear().type('15')

            cy.contains('Calcular').click()

            cy.get('#shortEncuestaNafin-close').should('be.visible').click()

            cy.get('#resultadosSimulador').should('be.visible').find('tbody').find('tr').should('have.length', 24)
            

        })
    })

    
})
describe('Drag and drop an element',function(){
    it('should drag an element from source to destination',async function(){
        await browser.url('/');
        await browser.url('https://jqueryui.com/droppable/');

        const sourceElement = await $('//div[@id="draggable"]');
        const destination = await $('//div[@id="droppable"]');
        let iframe = await $('iframe.demo-frame');
        await browser.pause(3000);
        console.log("Is iframe present?",await iframe.isDisplayed());

        //switching into iframe 
        await browser.switchToFrame(iframe);

        //Drage and drop the element
        await sourceElement.dragAndDrop(destination);
        await browser.pause(3000);

    })
})
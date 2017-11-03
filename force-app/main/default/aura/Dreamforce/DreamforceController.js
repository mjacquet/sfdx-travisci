({
    doInit : function(component,event,helper){
        var action = component.get("c.getDFYear");
        action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
                component.set("v.DFyear",response.getReturnValue());
            }    
        });
        $A.enqueueAction(action);      
    }
})
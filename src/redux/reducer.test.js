import  reducer from "../redux/reducer"
describe ('reducer',()=>{     
    it ( 'handles @@INIT',()=>{
        let action = {type: "@@INIT"}
        expect(reducer(undefined,action )).toEqual({
         "ingredients":  [],
         "newIngredient":  [],
         "recipes":  [],
         "redirect": false,
         "searchText": "",
         "user": null,
          })
        })
    
    
    // it ('handles FETCHED_INGREDIENTS', ()=>{
    //         let mockState= {"ingredients": []}
    //         let mockAction ={type: "FETCHED_INGREDIENTS", payload: { amount: 1,name:"Garlic", unit: "clove"}}
    //         let result =(reducer(mockState,mockAction))
    //       expect(result["ingredients"]).toBe( result.mockAction.payload )


    //     })
    })
    
        

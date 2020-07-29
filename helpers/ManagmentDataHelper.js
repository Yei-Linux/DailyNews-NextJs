import * as lodashLib from "lodash";

export const formatQuestionToUrlParam = question => {
    return question.toLowerCase().replace(/ /g,'-').replace(/[?]/g,'').replace(/[¿]/g,'');
}

export const buildingTreeCommentsOfParent = (treeContentArray,parentQuestionId) => {
    let childrenArrayFiltered = treeContentArray.filter(element => element.parent == parentQuestionId);

    childrenArrayFiltered.length > 0 && childrenArrayFiltered.forEach( element => { 
        element['comments'] = buildingTreeCommentsOfParent(treeContentArray,element._id);
    });

    return childrenArrayFiltered;
}

export const getParentItem = (treeContentArray,parentQuestionId) => {
    return treeContentArray.filter( item => item._id == parentQuestionId )[0];
}

export const findParentCommentAndDelete = (treeContentArray,parentQuestionId) => {
    return treeContentArray.filter( item => item._id != parentQuestionId );
}

export const buildingNestedComments = (data,questionId) => {
    let extensibleArray = lodashLib.cloneDeep(
        data.getTreeCommentsByQuestionId
    );
    let parentElement = getParentItem(extensibleArray, questionId);
    let dataFilteredWithoutParent = findParentCommentAndDelete(
        extensibleArray,
        questionId
    );
    let treeBuilt = buildingTreeCommentsOfParent(
        dataFilteredWithoutParent,
        questionId
    );

    return {parentElement,treeBuilt}
}
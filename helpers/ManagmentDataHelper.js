import * as lodashLib from "lodash";
import Cookie from "js-cookie";

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

export const getFieldOfUserInfo = (field) => {
    return JSON.parse(Cookie.get('user_info'))[field];
}

export const isLogging = () => {
    if(Cookie.get('jwt') != undefined || Cookie.get('jwt') != null){
        return true;
    }
}

export const getColorOrValue = (value,choose) => {
    return value.split('-')[choose];
}

export const parseTagArray = (tags) => {
    return tags.map(tag => {
        return { label: tag['name'], value: (`${tag['color']}-${tag['_id']}`) }
    });
}
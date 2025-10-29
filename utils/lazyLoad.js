/**
 * 
 * @param {string} link 
 */

export default async function loadScript(link){
    await import(link);
}
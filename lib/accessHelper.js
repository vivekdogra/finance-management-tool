'use strict';

var volunteerAccessArray = [{'text':'Submit a Bill', 'link':'/submitbills'},
                            {'text':'Cash Advance', 'link':'/cashadvance'},
                            {'text':'My Bills', 'link':'/user/mybills'},
                            {'text':'Search', 'link':'/searchresults'},
                            {'text':'Cash in Hand', 'link':'/cashinhand'}];

var chapterAccessArray  =  [{'text':'Submit a Bill', 'link':'/submitbills'},
                            {'text':'Cash Advance', 'link':'/cashadvance'},
                            {'text':'My Bills', 'link':'/user/mybills'},
                            {'text':'Cash in Hand', 'link':'/cashinhand'},
                            {'text':'Revenues', 'link':'/revenues'},
                            {'text':'Budget Proposal', 'link':'/budgetproposal'},
                            {'text':'Balance Sheet', 'link':'/balancesheet'},
                            {'text':'Search', 'link':'/searchresults'},
                            {'text':'Approval', 'children':[{'text':'Bills', 'link':'/approvebills'}, {'text':'Budget', 'link':'/approvebudget'}]},
                            {'text':'Funds Allocated', 'link':'/fundsallocated'}];

var centerAccessArray  =   [{'text':'Submit a Bill', 'link':'/submitbills'},
                            {'text':'Cash Advance', 'link':'/cashadvance'},
                            {'text':'My Bills', 'link':'/user/mybills'},
                            {'text':'Cash in Hand', 'link':'/cashinhand'},
                            {'text':'Revenues', 'link':'/revenues'},
                            {'text':'Budget Proposal', 'link':'/budgetproposal'},
                            {'text':'Balance Sheet', 'link':'/balancesheet'},
                            {'text':'Search', 'link':'/searchresults'},
                            {'text':'Approval', 'children':[{'text':'Bills', 'link':'/approvebills'}, {'text':'Budget', 'link':'/approvebudget'}]},
                            {'text':'Funds Allocated', 'link':'/fundsallocated'}];

var roleAcessArray = [];
roleAcessArray['volunteer'] = volunteerAccessArray;
roleAcessArray['chapter'] = chapterAccessArray;
roleAcessArray['center'] = centerAccessArray;




var getAccessArray = function(role){
    return roleAcessArray[role];
};

module.exports.getAccessArray = getAccessArray;

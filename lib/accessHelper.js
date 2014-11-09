'use strict';

var volunteerAccessArray = [{'text':'Submit a Bill', 'link':'/submitbills', 'status':'' },
                            {'text':'Cash Advance', 'link':'/cashadvance','status':''},
                            {'text':'My Bills', 'link':'/user/mybills','status':''},
                            {'text':'Search', 'link':'/searchresults','status':''},
                            {'text':'Cash in Hand', 'link':'/cashinhand','status':'disabled'}];

var chapterAccessArray  =  [{'text':'Submit a Bill', 'link':'/submitbills','status':''},
                            {'text':'Cash Advance', 'link':'/cashadvance','status':''},
                            {'text':'My Bills', 'link':'/user/mybills','status':''},
                            {'text':'Cash in Hand', 'link':'/cashinhand','status':'disabled'},
                            {'text':'Revenues', 'link':'/revenues','status':''},
                            {'text':'Budget Proposal', 'link':'/budgetproposal','status':'disabled'},
                            {'text':'Balance Sheet', 'link':'/balancesheet','status':'disabled'},
                            {'text':'Search', 'link':'/searchresults','status':'disabled'},
                            {'text':'Approval', 'children':[{'text':'Bills', 'link':'/approvebills','status':'disabled'}, {'text':'Budget', 'link':'/approvebudget','status':'disabled'}]},
                            {'text':'Funds Allocated', 'link':'/fundsallocated','status':'disabled'}];

var centerAccessArray  =   [{'text':'Submit a Bill', 'link':'/submitbills','status':''},
                            {'text':'Cash Advance', 'link':'/cashadvance','status':''},
                            {'text':'My Bills', 'link':'/user/mybills','status':''},
                            {'text':'Cash in Hand', 'link':'/cashinhand','status':'disabled'},
                            {'text':'Revenues', 'link':'/revenues','status':''},
                            {'text':'Budget Proposal', 'link':'/budgetproposal','status':'disabled'},
                            {'text':'Balance Sheet', 'link':'/balancesheet','status':'disabled'},
                            {'text':'Search', 'link':'/searchresults','status':'disabled'},
                            {'text':'Approval', 'children':[{'text':'Bills', 'link':'/approvebills','status':'disabled'}, {'text':'Budget', 'link':'/approvebudget','status':'disabled'}]},
                            {'text':'Funds Allocated', 'link':'/fundsallocated','status':'disabled'}];

var roleAcessArray = [];
roleAcessArray['volunteer'] = volunteerAccessArray;
roleAcessArray['chapter'] = chapterAccessArray;
roleAcessArray['center'] = centerAccessArray;




var getAccessArray = function(role){
    return roleAcessArray[role];
};

module.exports.getAccessArray = getAccessArray;

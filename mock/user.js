const tokens = {
  gzadmin: {
    token: 'gzadmin'
  },
  editor: {
    token: 'editor'
  }
}

const users = {
  gzadmin: {
    roles: ['gzadmin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  }
}

export default [
  // user login
  {
    url: '/system/login.json',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '用户名和密码错误！'
        }
      }

      return {
        code: 0,
        msg: '登录验证成功',
        data: [
          {
            db: 'string',
            empCode: '1',
            empName: '鱼鱼鱼',
            eduDegree: 'string',
            contTel: 'string',
            idNo: 'string',
            campFlg: 'string',
            vtlEmpFlg: 'string',
            loginName: 'string',
            loginPwd: 'string',
            secuLvl: 'string',
            wrtOffStus: 'string',
            fstLogin: 'string',
            photoInfo: 'string',
            oprtorId: 'string',
            wrtOffDt: 0,
            bthday: 0,
            workdDt: 0,
            jobkDt: 0,
            styleFlg: 'string',
            sortFlg: 0,
            updPwdDt: 'string',
            corpId: 'string',
            salt: 'string',
            corp: {
              id: 0,
              corpName: '广州管理员',
              corpCode: 'string',
              corpDb: 'string'
            }
          },
          {
            db: 'string',
            empCode: '1',
            empName: '鱼鱼鱼',
            eduDegree: 'string',
            contTel: 'string',
            idNo: 'string',
            campFlg: 'string',
            vtlEmpFlg: 'string',
            loginName: 'string',
            loginPwd: 'string',
            secuLvl: 'string',
            wrtOffStus: 'string',
            fstLogin: 'string',
            photoInfo: 'string',
            oprtorId: 'string',
            wrtOffDt: 0,
            bthday: 0,
            workdDt: 0,
            jobkDt: 0,
            styleFlg: 'string',
            sortFlg: 0,
            updPwdDt: 'string',
            corpId: 'string',
            salt: 'string',
            corp: {
              id: 0,
              corpName: '佛山管理员',
              corpCode: 'string',
              corpDb: 'string'
            }
          }
        ]
      }
    }
  },

  // get user info
  {
    url: '/user/info.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]
      // mock error
      if (!info) {
        return {
          code: 5001,
          message: 'Login failed, unable to get user details.',
          token: token
        }
      }
      return {
        code: 20000,
        data: info,
        token: token
      }
    }
  },

  // user logout
  {
    url: '/system/logout.json',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  // 用户角色列表
  {
    url: '/system/loadUserInfo.json',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '成功获取用户列表',
        data: {
          orgCtg: {},
          empCtg: {},
          org: {
            orgCode: '7333',
            orgName: '农信'
          },
          roles: [
            {
              db: 'string',
              roleCode: 0,
              roleName: '总行领导',
              roleType: 0,
              prntRole: 0,
              setMode: 'string',
              crtr: 0,
              crtTm: '2019-11-28T02:37:28.125Z',
              roleGroup: 'string',
              roleTypeName: 'string'
            },
            {
              db: 'string',
              roleCode: 0,
              roleName: '分行负责人',
              roleType: 0,
              prntRole: 0,
              setMode: 'string',
              crtr: 0,
              crtTm: '2019-11-28T02:37:28.125Z',
              roleGroup: 'string',
              roleTypeName: 'string'
            },
            {
              db: 'string',
              roleCode: 0,
              roleName: '绩效专员',
              roleType: 0,
              prntRole: 0,
              setMode: 'string',
              crtr: 0,
              crtTm: '2019-11-28T02:37:28.125Z',
              roleGroup: 'string',
              roleTypeName: 'string'
            },
            {
              db: 'string',
              roleCode: 0,
              roleName: '行员',
              roleType: 0,
              prntRole: 0,
              setMode: 'string',
              crtr: 0,
              crtTm: '2019-11-28T02:37:28.125Z',
              roleGroup: 'string',
              roleTypeName: 'string'
            }
          ],
          sysdate: '20191210'
        }
      }
    }
  },
  // 用户菜单
  {
    url: '/system/userMenu.json',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        msg: 'string',
        data: {
          children: [
            {
              path: '/sysMng',
              component: 'Layout',
              name: 'SysMng',
              meta: { title: '系统管理', icon: 'sysMng-sysMng' },
              children: [
                {
                  path: 'orgaMng',
                  name: 'OrgaMng',
                  component: '/sysMng/orgaMng/index',
                  meta: { title: '组织管理', icon: 'point' },
                  children: [
                    {
                      path: 'orgMng',
                      name: 'OrgMng',
                      component: '/sysMng/orgaMng/orgMng/index',
                      meta: { title: '机构管理', icon: '' }
                    },
                    {
                      path: 'empMng',
                      name: 'EmpMng',
                      component: '/sysMng/orgaMng/empMng/index',
                      meta: { title: '行员管理', icon: '' }
                    },
                    {
                      path: 'tellMng',
                      name: 'TellMng',
                      component: '/sysMng/orgaMng/tellMng/index',
                      meta: { title: '柜员管理', icon: '' }
                    },
                    {
                      path: 'orgTypeMng',
                      name: 'OrgTypeMng',
                      component: '/sysMng/orgaMng/orgTypeMng/index',
                      meta: { title: '机构类别管理', icon: '' }
                    },
                    {
                      path: 'empTypeMng',
                      name: 'EmpTypeMng',
                      component: '/sysMng/orgaMng/empTypeMng/index',
                      meta: { title: '行员类别管理', icon: '' }
                    },
                    {
                      path: 'postMng',
                      name: 'PostMng',
                      component: '/sysMng/orgaMng/postMng/index',
                      meta: { title: '岗位管理', icon: '' }
                    },
                    {
                      path: 'roleMng',
                      name: 'RoleMng',
                      component: '/sysMng/orgaMng/roleMng/index',
                      meta: { title: '角色管理', icon: '' }
                    },
                    {
                      path: 'appLogQry',
                      name: 'AppLogQry',
                      component: '/sysMng/orgaMng/appLogQry/index',
                      meta: { title: '应用日志查询', icon: '' }
                    }
                  ]
                },
                {
                  path: 'parMng',
                  name: 'ParMng',
                  component: '/sysMng/parMng/index',
                  meta: { title: '参数管理', icon: 'point' },
                  children: [
                    {
                      path: 'comnParMng',
                      name: 'ComnParMng',
                      component: '/sysMng/parMng/comnParMng/index',
                      meta: { title: '通用参数管理', icon: '' }
                    },
                    {
                      path: 'rangeConfMng',
                      name: 'RangeConfMng',
                      component: '/sysMng/parMng/rangeConfMng/index',
                      meta: { title: '区间配置管理', icon: '' }
                    },
                    {
                      path: 'dataDictMng',
                      name: 'DataDictMng',
                      component: '/sysMng/parMng/dataDictMng/index',
                      meta: { title: '数据字典管理', icon: '' }
                    },
                    {
                      path: 'sysParMng',
                      name: 'SysParMng',
                      component: '/sysMng/parMng/sysParMng/index',
                      meta: { title: '系统参数管理', icon: '' }
                    }
                  ]
                }
              ]
            },
            {
              path: '/planMng',
              component: 'Layout',
              name: 'PlanMng',
              meta: { title: '计划管理', icon: 'planMng' },
              children: [
                {
                  path: 'orgPlan',
                  component: '/planMng/orgPlan/index',
                  name: 'OrgPlan',
                  meta: { title: '机构计划', icon: 'point', roles: ['editor'], noCache: true },
                  children: [
                    {
                      path: 'orgYearPlan',
                      name: 'OrgYearPlan',
                      component: '/planMng/orgPlan/orgYearPlan/index',
                      meta: {
                        title: '机构年计划管理',
                        icon: '',
                        roles: ['editor']
                      }
                    },
                    {
                      path: 'orgQtrPlan',
                      name: 'OrgQtrPlan',
                      component: '/planMng/orgPlan/orgQtrPlan/index',
                      meta: { title: '机构季计划管理', icon: '' }
                    },
                    {
                      path: 'orgMonPlan',
                      name: 'OrgMonPlan',
                      component: '/planMng/orgPlan/orgMonPlan/index',
                      meta: { title: '机构月计划管理', icon: '' }
                    },
                    {
                      path: 'orgPlanProgQry',
                      component: '/planMng/orgPlan/orgPlanProgQry/index',
                      name: 'OrgPlanProgQry',
                      meta: { title: '机构计划进度查询', icon: '' }
                    },
                    {
                      path: 'resYearOrg',
                      name: 'ResYearOrg',
                      component: '/planMng/orgPlan/orgYearPlan/resYearOrg/index',
                      meta: { title: '年度分解至机构', icon: '', noCache: true },
                      hidden: true
                    },
                    {
                      path: 'resQtrOrg',
                      name: 'ResQtrOrg',
                      component: '/planMng/orgPlan/orgQtrPlan/nextOrgQtrPlan/index',
                      meta: { title: '季度分解至机构', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'resYearEmp',
                      name: 'ResYearEmp',
                      component: '/planMng/orgPlan/orgYearPlan/resYearEmp/index',
                      meta: { title: '年度分解至行员', icon: '', noCache: true },
                      hidden: true
                    },
                    {
                      path: 'resQtrEmp',
                      name: 'ResQtrEmp',
                      component: '/planMng/orgPlan/orgQtrPlan/nextEmpQtrPlan/index',
                      meta: { title: '季度分解至行员', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'impOrgYearPlan',
                      name: 'ImpOrgYearPlan',
                      component: '/planMng/orgPlan/orgYearPlan/impOrgYearPlan/index',
                      meta: { title: '导入年度计划', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'impOrgQtrPlan',
                      name: 'ImpOrgQtrPlan',
                      component: '/planMng/orgPlan/orgQtrPlan/impOrgQtrPlan/index',
                      meta: { title: '导入季度计划', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'resMonOrg',
                      name: 'ResMonOrg',
                      component: '/planMng/orgPlan/orgMonPlan/resMonOrg/index',
                      meta: { title: '分解至机构' },
                      hidden: true
                    },
                    {
                      path: 'resMonEmp',
                      name: 'ResMonEmp',
                      component: '/planMng/orgPlan/orgMonPlan/resMonEmp/index',
                      meta: { title: '分解至行员' },
                      hidden: true
                    },

                    {
                      path: 'impOrgMonPlan',
                      name: 'ImpOrgMonPlan',
                      component: '/planMng/orgPlan/orgMonPlan/impOrgMonPlan/index',
                      meta: { title: '导入机构月度计划' },
                      hidden: true
                    }
                  ]
                },
                {
                  path: 'empPlan',
                  name: 'EmpPlan',
                  component: '/planMng/empPlan/index',
                  meta: { title: '行员计划', icon: 'point' },
                  children: [
                    {
                      path: 'empYearPlan',
                      name: 'EmpYearPlan',
                      component: '/planMng/empPlan/empYearPlan/index',
                      meta: { title: '行员年计划管理', icon: '' }
                    },
                    {
                      path: 'empQtrPlan',
                      name: 'EmpQtrPlan',
                      component: '/planMng/empPlan/empQtrPlan/index',
                      meta: { title: '行员季计划管理', icon: '' }
                    },
                    {
                      path: 'empMonPlan',
                      name: 'EmpMonPlan',
                      component: '/planMng/empPlan/empMonPlan/index',
                      meta: { title: '行员月计划管理', icon: '' }
                    },
                    {
                      path: 'empPlanProgQry',
                      name: 'EmpPlanProgQry',
                      component: '/planMng/empPlan/empPlanProgQry/index',
                      meta: { title: '行员计划进度查询', icon: '' }
                    },
                    {
                      path: 'impEmpYearPlan',
                      name: 'ImpEmpYearPlan',
                      component: '/planMng/empPlan/empYearPlan/impEmpYearPlan/index',
                      meta: { title: '导入年度计划', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'impQtrPlan',
                      name: 'ImpQtrPlan',
                      component: '/planMng/empPlan/empQtrPlan/impQtrPlan/index',
                      meta: { title: '导入季度计划', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'impEmpMonPlan',
                      name: 'ImpEmpMonPlan',
                      component: '/planMng/empPlan/empMonPlan/impEmpMonPlan/index',
                      meta: { title: '导入行员月度计划' },
                      hidden: true
                    }
                  ]
                }
              ]
            },
            {
              path: '/acmtMng',
              component: 'Layout',
              name: 'AcmtMng',
              meta: { title: '业绩管理', icon: 'acmtMng' },
              children: [
                {
                  path: 'acctAlc',
                  name: 'AcctAlc',
                  component: '/acmtMng/acctAlc/index',
                  meta: { title: '账户分配', icon: 'point' },
                  children: [
                    {
                      path: 'dacctAlc',
                      name: 'DacctAlc',
                      component: '/acmtMng/acctAlc/dacctAlc/index',
                      meta: { title: '存款账户分配', icon: '' }
                    },
                    {
                      path: 'lacctAlc',
                      name: 'LacctAlc',
                      component: '/acmtMng/acctAlc/lacctAlc/index',
                      meta: { title: '贷款账户分配', icon: '' }
                    },
                    {
                      path: 'dacctTran',
                      name: 'DacctTran',
                      component: '/acmtMng/acctAlc/dacctTran/index',
                      meta: { title: '存款账户转移', icon: '' }
                    },
                    {
                      path: 'lacctTran',
                      name: 'LacctTran',
                      component: '/acmtMng/acctAlc/lacctTran/index',
                      meta: { title: '贷款账户转移', icon: '' }
                    },
                    {
                      path: 'loanRespAlc',
                      name: 'LoanRespAlc',
                      component: '/acmtMng/acctAlc/loanRespAlc/index',
                      meta: { title: '贷款责任认定', icon: '' }
                    },
                    {
                      path: 'midBizSignAlc',
                      name: 'MidBizSignAlc',
                      component: '/acmtMng/acctAlc/midBizSignAlc/index',
                      meta: { title: '中间业务签约分配', icon: '' }
                    },
                    {
                      path: 'midBizSeqAlc',
                      name: 'MidBizSeqAlc',
                      component: '/acmtMng/acctAlc/midBizSeqAlc/index',
                      meta: { title: '中间业务流水分配', icon: '' }
                    },
                    {
                      path: 'import',
                      name: 'Import',
                      component: '/acmtMng/acctAlc/import',
                      meta: { title: '存贷款账户业绩导入', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'importloanRespAlc',
                      name: 'ImportloanRespAlc',
                      component: '/acmtMng/acctAlc/importloanRespAlc',
                      meta: { title: '贷款责任认定导入', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'importmidBiz',
                      name: 'ImportmidBiz',
                      component: '/acmtMng/acctAlc/importmidBiz',
                      meta: { title: '中间业务业绩导入', icon: '' },
                      hidden: true
                    }
                  ]
                },

                {
                  path: 'custAlc',
                  name: 'CustAlc',
                  component: '/acmtMng/custAlc/index',
                  meta: { title: '客户分配', icon: 'point' },
                  children: [
                    {
                      path: 'dpstCustAlc',
                      name: 'DpstCustAlc',
                      component: '/acmtMng/custAlc/dpstCustAlc/index',
                      meta: { title: '存款客户分配', icon: '' }
                    },
                    {
                      path: 'loanCustAlc',
                      name: 'LoanCustAlc',
                      component: '/acmtMng/custAlc/loanCustAlc/index',
                      meta: { title: '贷款客户分配', icon: '' }
                    },
                    {
                      path: 'dpstCustTran',
                      name: 'DpstCustTran',
                      component: '/acmtMng/custAlc/dpstCustTran/index',
                      meta: { title: '存款客户转移', icon: '' }
                    },
                    {
                      path: 'loanCustTran',
                      name: 'LoanCustTran',
                      component: '/acmtMng/custAlc/loanCustTran/index',
                      meta: { title: '贷款客户转移', icon: '' }
                    },
                    {
                      path: 'import',
                      name: 'Import',
                      component: '/acmtMng/custAlc/import',
                      meta: { title: '存贷款客户业绩导入', icon: '' },
                      hidden: true
                    }
                  ]
                },
                {
                  path: 'acmtClm',
                  name: 'AcmtClm',
                  component: '/acmtMng/acmtClm/index',
                  meta: { title: '业绩认领', icon: 'point' },
                  children: [
                    {
                      path: 'loanAcctClm',
                      name: 'LoanAcctClm',
                      component: '/acmtMng/acmtClm/loanByAcctClm/index',
                      meta: { title: '贷款账号认领', icon: '' }
                    },
                    {
                      path: 'loanCustClm',
                      name: 'LoanCustClm',
                      component: '/acmtMng/acmtClm/loanByCustClm/index',
                      meta: { title: '贷款客户认领', icon: '' }
                    }
                  ]
                },
                {
                  path: 'acmtChk',
                  name: 'AcmtChk',
                  component: '/acmtMng/acmtChk/index',
                  meta: { title: '业绩复核', icon: 'point' },
                  children: [
                    {
                      path: 'dacctByAcctChk',
                      name: 'DacctByAcctChk',
                      component: '/acmtMng/acmtChk/dacctByAcctChk/index',
                      meta: { title: '存款账号复核', icon: '' }
                    },
                    {
                      path: 'loanByAcctChk',
                      name: 'LoanByAcctChk',
                      component: '/acmtMng/acmtChk/loanByAcctChk/index',
                      meta: { title: '贷款账号复核', icon: '' }
                    },
                    {
                      path: 'dacctByCustChk',
                      name: 'DacctByCustChk',
                      component: '/acmtMng/acmtChk/dacctByCustChk/index',
                      meta: { title: '存款客户复核', icon: '' }
                    },
                    {
                      path: 'loanByCustChk',
                      name: 'LoanByCustChk',
                      component: '/acmtMng/acmtChk/loanByCustChk/index',
                      meta: { title: '贷款客户复核', icon: '' }
                    },
                    {
                      path: 'midBizSignAlc',
                      name: 'MidBizSignAlc',
                      component: '/acmtMng/acmtChk/midBizSignAlc/index',
                      meta: { title: '中间业务签约复核', icon: '' }
                    },
                    {
                      path: 'midBizSeqAlc',
                      name: 'MidBizSeqAlc',
                      component: '/acmtMng/acmtChk/midBizSeqAlc/index',
                      meta: { title: '中间业务流水复核', icon: '' }
                    }
                  ]
                },
                {
                  path: 'acmtAprv',
                  name: 'AcmtAprv',
                  component: '/acmtMng/acmtAprv/index',
                  meta: { title: '业绩审批', icon: 'point' },
                  children: [
                    {
                      path: 'dacctByAcctAprv',
                      name: 'DacctByAcctAprv',
                      component: '/acmtMng/acmtAprv/dacctByAcctAprv/index',
                      meta: { title: '存款账户审批', icon: '' }
                    },
                    {
                      path: 'loanAcctAprv',
                      name: 'LoanAcctAprv',
                      component: '/acmtMng/acmtAprv/loanByAcctAprv/index',
                      meta: { title: '贷款账号审批', icon: '' }
                    },
                    {
                      path: 'loanCustAprv',
                      name: 'LoanCustAprv',
                      component: '/acmtMng/acmtAprv/loanByCustAprv/index',
                      meta: { title: '贷款客户审批', icon: '' }
                    },
                    {
                      path: 'dacctByCustAprv',
                      name: 'DacctByCustAprv',
                      component: '/acmtMng/acmtAprv/dacctByCustAprv/index',
                      meta: { title: '存款客户审批', icon: '' }
                    },
                    {
                      path: 'midBizSignAlc',
                      name: 'MidBizSignAlc',
                      component: '/acmtMng/acmtAprv/midBizSignAlc/index',
                      meta: { title: '中间业务签约审批', icon: '' }
                    },
                    {
                      path: 'midBizSeqAlc',
                      name: 'MidBizSeqAlc',
                      component: '/acmtMng/acmtAprv/midBizSeqAlc/index',
                      meta: { title: '中间业务流水审批', icon: '' }
                    }
                  ]
                },
                {
                  path: 'acmtAlcModeMng',
                  name: 'AcmtAlcModeMng',
                  component: '/acmtMng/acmtAlcModeMng/index',
                  meta: { title: '业绩分配方式管理', icon: 'point' },
                  children: [
                    {
                      path: 'dpstAlcModeMng',
                      name: 'DpstAlcModeMng',
                      component: '/acmtMng/acmtAlcModeMng/dpstAlcModeMng/index',
                      meta: { title: '存款分配方式', icon: '' }
                    },
                    {
                      path: 'loanAlcModeMng',
                      name: 'LoanAlcModeMng',
                      component: '/acmtMng/acmtAlcModeMng/loanAlcModeMng/index',
                      meta: { title: '贷款分配方式', icon: '' }
                    }
                  ]
                },
                {
                  path: 'businManage',
                  name: 'BusinManage',
                  component: '/acmtMng/businManage/index',
                  meta: { title: '业务量管理', icon: 'point' },
                  children: [
                    {
                      path: 'businConver',
                      name: 'businConver',
                      component: '/acmtMng/businManage/businConver/index',
                      meta: { title: '业务量折算系数管理', icon: '' }
                    },
                    {
                      path: 'empBusin',
                      name: 'empBusin',
                      component: '/acmtMng/businManage/empBusin/index',
                      meta: { title: '行员业务量查询', icon: '' }
                    },
                    {
                      path: 'empBusinAuthori',
                      name: 'empBusinAuthori',
                      component: '/acmtMng/businManage/empBusinAuthori/index',
                      meta: { title: '行员授权业务量查询', icon: '' }
                    },
                    {
                      path: 'orgBusin',
                      name: 'orgBusin',
                      component: '/acmtMng/businManage/orgBusin/index',
                      meta: { title: '机构业务量查询', icon: '' }
                    },
                    {
                      path: 'orgBusinAuthori',
                      name: 'orgBusinAuthori',
                      component: '/acmtMng/businManage/orgBusinAuthori/index',
                      meta: { title: '机构授权业务量查询', icon: '' }
                    },
                    {
                      path: 'orgTraVolSumQry',
                      name: 'OrgTraVolSumQry',
                      component: '/acmtMng/businManage/orgTraVolSumQry/index',
                      meta: { title: '机构业务量汇总查询', icon: '' }
                    },
                    {
                      path: 'orgTraVolDtlQry',
                      name: 'OrgTraVolDtlQry',
                      component: '/acmtMng/businManage/orgTraVolDtlQry/index',
                      meta: { title: '机构业务量明细查询', icon: '' }
                    },
                    {
                      path: 'tellTraVolSumQry',
                      name: 'TellTraVolSumQry',
                      component: '/acmtMng/businManage/tellTraVolSumQry/index',
                      meta: { title: '柜员业务量汇总查询', icon: '' }
                    },
                    {
                      path: 'tellTraVolDtlQry',
                      name: 'TellTraVolDtlQry',
                      component: '/acmtMng/businManage/tellTraVolDtlQry/index',
                      meta: { title: '柜员业务量明细查询', icon: '' }
                    }
                  ]
                }
              ]
            },
            {
              path: '/acmtQry',
              component: 'Layout',
              name: 'AcmtQry',
              meta: { title: '业绩查询', icon: 'acmtQry' },
              children: [
                {
                  path: 'acmtKpi',
                  name: 'AcmtKpi',
                  component: '/acmtQry/acmtKpi/index',
                  meta: { title: '业绩指标', icon: 'point' },
                  children: [
                    {
                      path: 'orgAcmtQry',
                      name: 'OrgAcmtQry',
                      component: '/acmtQry/acmtKpi/orgAcmtQry/index',
                      meta: { title: '机构业绩查询', icon: '' }
                    },
                    {
                      path: 'empAcmtQry',
                      name: 'EmpAcmtQry',
                      component: '/acmtQry/acmtKpi/empAcmtQry/index',
                      meta: { title: '行员业绩查询', icon: '' }
                    }
                  ]
                },

                {
                  path: 'acmtView',
                  name: 'AcmtView',
                  component: '/acmtQry/acmtView/index',
                  meta: { title: '业绩一览', icon: 'point' },
                  children: [
                    {
                      path: 'viewKpiMng',
                      name: 'ViewKpiMng',
                      component: '/acmtQry/acmtView/viewKpiMng/index',
                      meta: { title: '一览指标管理', icon: '' }
                    },
                    {
                      path: 'orgAcmtView',
                      name: 'OrgAcmtView',
                      component: '/acmtQry/acmtView/orgAcmtView/index',
                      meta: { title: '机构业绩一览', icon: '' }
                    },
                    {
                      path: 'empAcmtView',
                      name: 'EmpAcmtView',
                      component: '/acmtQry/acmtView/empAcmtView/index',
                      meta: { title: '行员业绩一览', icon: '' }
                    },
                    {
                      path: 'bizPage',
                      name: 'BizPage',
                      component: '/acmtQry/acmtView/bizPage',
                      meta: { title: '指标详情页面', icon: '' },
                      hidden: true
                    }
                  ]
                },
                {
                  path: 'acmtDtl',
                  name: 'AcmtDtl',
                  component: '/acmtQry/logQry/index',
                  meta: { title: '业绩明细', icon: 'point' },
                  children: [
                    {
                      path: 'indvDpstDtl/:dpst',
                      name: 'IndvDpstDtl',
                      component: '/acmtQry/acmtDtl/indvDpstDtl/index',
                      meta: { title: '个人存款明细', icon: '' }
                    },
                    {
                      path: 'indvLoanDtl',
                      name: 'IndvLoanDtl',
                      component: '/acmtQry/acmtDtl/indvLoanDtl/index',
                      meta: { title: '个人贷款明细', icon: '' }
                    },
                    {
                      path: 'indvLoanRespDtl',
                      name: 'IndvLoanRespDtl',
                      component: '/acmtQry/acmtDtl/indvLoanRespDtl/index',
                      meta: { title: '个人贷款责任明细', icon: '' }
                    }
                  ]
                },
                {
                  path: 'logQry',
                  name: 'LogQry',
                  component: '/acmtQry/logQry/index',
                  meta: { title: '日志查询', icon: 'point' },
                  children: [
                    {
                      path: 'dpstAlcLog',
                      name: 'DpstAlcLog',
                      component: '/acmtQry/logQry/dpstAlcLog/index',
                      meta: { title: '存款分配日志', icon: '' }
                    },
                    {
                      path: 'loanAlcLog',
                      name: 'LoanAlcLog',
                      component: '/acmtQry/logQry/loanAlcLog/index',
                      meta: { title: '贷款分配日志', icon: '' }
                    },
                    {
                      path: 'loanRespAlcLog',
                      name: 'LoanRespAlcLog',
                      component: '/acmtQry/logQry/loanRespAlcLog/index',
                      meta: { title: '贷款责任认定日志', icon: '' }
                    },
                    {
                      path: 'midBizAlcLog',
                      name: 'MidBizAlcLog',
                      component: '/acmtQry/logQry/midBizAlcLog/index',
                      meta: { title: '中间业务分配日志', icon: '' }
                    }
                  ]
                },
                {
                  path: 'midBizDtl',
                  name: 'MidBizDtl',
                  component: '/acmtQry/midBizDtl/index',
                  meta: { title: '中间业务明细', icon: 'point' },
                  children: [
                    {
                      path: 'seqDtlQry',
                      name: 'SeqDtlQry',
                      component: '/acmtQry/midBizDtl/seqDtlQry/index',
                      meta: { title: '流水明细查询', icon: ' ' }
                    },
                    {
                      path: 'signDtlQry',
                      name: 'SignDtlQry',
                      component: '/acmtQry/midBizDtl/signDtlQry/index',
                      meta: { title: '签约明细查询', icon: ' ' }
                    },
                    {
                      path: 'mnlDtlQry',
                      name: 'MnlDtlQry',
                      component: '/acmtQry/midBizDtl/mnlDtlQry/index',
                      meta: { title: '手工导入明细查询', icon: ' ' }
                    }
                  ]
                }
              ]
            },
            {
              path: '/kpiLib',
              component: 'Layout',
              name: 'KpiLib',
              meta: { title: '指标库', icon: 'kpiLib' },
              children: [
                {
                  path: 'kpiMng',
                  name: 'KpiMng',
                  component: '/kpiLib/kpiMng/index',
                  meta: { title: '指标管理', icon: 'point' },
                  children: [
                    {
                      path: 'DataSourceTree',
                      name: 'DataSourceTree',
                      component: '/kpiLib/kpiMng/DataSourceTree/index',
                      meta: { title: '指标数据源查询', icon: '' }
                    },
                    {
                      path: 'IndexTree',
                      name: 'IndexTree',
                      component: '/kpiLib/kpiMng/IndexTree/index',
                      meta: { title: '指标配置', icon: '' }
                    },
                    {
                      path: 'kpiBackCount',
                      name: 'KpiBackCount',
                      component: '/kpiLib/kpiMng/kpiBackCount/index',
                      meta: { title: '指标回算', icon: '' }
                    }
                  ]
                },
                {
                  path: 'mnkpiMng',
                  name: 'MnkpiMng',
                  component: '/kpiLib/mnkpiMng/index',
                  meta: { title: '手工指标管理', icon: 'point' },
                  children: [
                    {
                      path: 'empMnkpiMng',
                      name: 'EmpMnkpiMng',
                      component: '/kpiLib/mnkpiMng/empMnkpiMng/index',
                      meta: { title: '行员手工指标', icon: '' }
                    },
                    {
                      path: 'impEmpMnkpiMng',
                      name: 'ImpEmpMnkpiMng',
                      component: '/kpiLib/mnkpiMng/empMnkpiMng/impEmpMnkpiMng',
                      meta: { title: '行员手工指标导入', icon: '' },
                      hidden: true
                    },
                    {
                      path: 'orgMnkpiMng',
                      name: 'OrgMnkpiMng',
                      component: '/kpiLib/mnkpiMng/orgMnkpiMng/index',
                      meta: { title: '机构手工指标', icon: '' }
                    },
                    {
                      path: 'impOrgMnkpiMng',
                      name: 'ImpOrgMnkpiMng',
                      component: '/kpiLib/mnkpiMng/orgMnkpiMng/impOrgMnkpiMng',
                      meta: { title: '机构手工指标导入', icon: '' },
                      hidden: true
                    }
                  ]
                },
                {
                  path: 'baseSet',
                  name: 'BaseSet',
                  component: '/kpiLib/baseSet/index',
                  meta: { title: '基数设置', icon: 'point' },
                  children: [
                    {
                      path: 'baseSchmSet',
                      name: 'BaseSchmSet',
                      component: '/kpiLib/baseSet/baseSchmSet/index',
                      meta: { title: '基数方案设置', icon: '' }
                    },
                    {
                      path: 'dpstBaseAdj',
                      name: 'DpstBaseAdj',
                      component: '/kpiLib/baseSet/dpstBaseAdj/index',
                      meta: { title: '存款基数调整', icon: '' }
                    },
                    {
                      path: 'orgBaseMng',
                      name: 'OrgBaseMng',
                      component: '/kpiLib/baseSet/orgBaseMng/index',
                      meta: { title: '机构考核基数', icon: '' }
                    },
                    {
                      path: 'empBaseMng',
                      name: 'EmpBaseMng',
                      component: '/kpiLib/baseSet/empBaseMng/index',
                      meta: { title: '行员考核基数', icon: '' }
                    },
                    {
                      path: 'empBaseAdj',
                      name: 'EmpBaseAdj',
                      component: '/kpiLib/baseSet/empBaseAdj/index',
                      meta: { title: '行员基数调整', icon: '' }
                    },
                    {
                      path: 'orgBaseAdj',
                      name: 'OrgBaseAdj',
                      component: '/kpiLib/baseSet/orgBaseAdj/index',
                      meta: { title: '机构基数调整', icon: '' }
                    }
                  ]
                },
                {
                  path: 'specAcctAdj',
                  name: 'SpecAcctAdj',
                  component: '/kpiLib/specAcctAdj/index',
                  meta: { title: '特殊账户调整', icon: 'point' },
                  children: [
                    {
                      path: 'specAdjTypeMatn',
                      name: 'SpecAdjTypeMatn',
                      component: '/kpiLib/specAcctAdj/specAdjTypeMatn/index',
                      meta: { title: '调整类型维护', icon: '' }
                    },
                    {
                      path: 'specAcctAef',
                      name: 'SpecAcctAef',
                      component: '/kpiLib/specAcctAdj/specAcctAef/index',
                      meta: { title: '账户定义', icon: '' }
                    },
                    {
                      path: 'importSpecAcctAef',
                      name: 'ImportSpecAcctAef',
                      component: '/kpiLib/specAcctAdj/importSpecAcctAef/index',
                      meta: { title: '导入特殊账户', icon: '' },
                      hidden: true
                    }
                  ]
                }
              ]
            },
            {
              path: '/schm',
              component: 'Layout',
              name: 'Schm',
              meta: { title: '考核方案', icon: 'point' },
              children: [
                {
                  path: 'schmMng',
                  name: 'SchmMng',
                  component: '/schm/schmMng/index',
                  meta: { title: '考核方案管理', icon: 'point' },
                  children: [
                    {
                      path: 'empKpiMng',
                      name: 'EmpKpiMng',
                      component: '/schm/schmMng/empKpiMng/index',
                      meta: { title: '行员考核指标管理' }
                    },
                    {
                      path: 'orgKpiMng',
                      name: 'OrgKpiMng',
                      component: '/schm/schmMng/orgKpiMng/index',
                      meta: { title: '机构考核指标管理' }
                    },
                    {
                      path: 'schmConf',
                      name: 'SchmConf',
                      component: '/schm/schmMng/schmConf/index',
                      meta: { title: '考核方案配置' }
                    },
                    {
                      path: 'addSchmConf',
                      name: 'AddSchmConf',
                      component: '/schm/schmMng/schmConf/addSchmConf/index',
                      meta: { title: '新增考核方案' },
                      hidden: true
                    },
                    {
                      path: 'calcSchm',
                      name: 'CalcSchm',
                      component: '/schm/schmMng/schmConf/calcSchm/index',
                      meta: { title: '方案计算' },
                      hidden: true
                    },
                    {
                      path: 'isuGd',
                      name: 'IsuGd',
                      component: '/schm/schmMng/schmConf/isuGd/index',
                      meta: { title: '发布成绩' },
                      hidden: true
                    },
                    {
                      path: 'schmGd',
                      name: 'SchmGd',
                      component: '/schm/schmMng/schmConf/schmGd/index',
                      meta: { title: '考核方案得分' },
                      hidden: true
                    }
                  ]
                },
                {
                  path: 'apprSchmMng',
                  name: 'ApprSchmMng',
                  component: '/schm/apprSchmMng/index',
                  alwaysShow: true,
                  meta: { title: '评议方案', icon: 'point' },
                  children: [
                    {
                      path: 'voteMng360',
                      name: 'VoteMng360',
                      component: '/schm/apprSchmMng/voteMng360/index',
                      meta: { title: '360评测管理' }
                    }
                  ]
                },
                {
                  path: 'schmRsltQry',
                  name: 'SchmRsltQry',
                  component: '/schm/schmRsltQry/index',
                  meta: { title: '方案结果查询', icon: 'point' },
                  children: [
                    {
                      path: 'empScoreQry',
                      name: 'EmpScoreQry',
                      component: '/schm/schmRsltQry/empScoreQry/index',
                      meta: { title: '行员考核得分查询' }
                    },
                    {
                      path: 'empScoreDtlQry',
                      name: 'EmpScoreDtlQry',
                      component: '/schm/schmRsltQry/empScoreDtlQry/index',
                      meta: { title: '行员考核得分明细查询' }
                    },
                    {
                      path: 'orgValtSalQry',
                      name: 'OrgValtSalQry',
                      component: '/schm/schmRsltQry/orgValtSalQry/index',
                      meta: { title: '机构计价工资查询' }
                    },
                    {
                      path: 'empValtSalQry',
                      name: 'EmpValtSalQry',
                      component: '/schm/schmRsltQry/empValtSalQry/index',
                      meta: { title: '行员计价工资查询' }
                    },
                    {
                      path: 'orgScoreQry',
                      name: 'OrgScoreQry',
                      component: '/schm/schmRsltQry/orgScoreQry/index',
                      meta: { title: '机构考核得分查询' }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
]

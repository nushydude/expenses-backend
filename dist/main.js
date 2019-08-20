(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["default"] = factory();
	else
		root["default"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("upash");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@saeris/graphql-scalars");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@phc/argon2");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("micro-cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("dataloader");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fast-json-stable-stringify");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("sift");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mutations_Expense_namespaceObject = {};
__webpack_require__.r(mutations_Expense_namespaceObject);
__webpack_require__.d(mutations_Expense_namespaceObject, "addExpense", function() { return addExpense; });
var mutations_User_namespaceObject = {};
__webpack_require__.r(mutations_User_namespaceObject);
__webpack_require__.d(mutations_User_namespaceObject, "changePassword", function() { return changePassword; });
__webpack_require__.d(mutations_User_namespaceObject, "sendAccountVerificationLink", function() { return sendAccountVerificationLink; });
__webpack_require__.d(mutations_User_namespaceObject, "sendResetPasswordLink", function() { return sendResetPasswordLink; });
__webpack_require__.d(mutations_User_namespaceObject, "signUpWithEmail", function() { return signUpWithEmail; });
__webpack_require__.d(mutations_User_namespaceObject, "verifyAccount", function() { return verifyAccount; });
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, "addExpense", function() { return addExpense; });
__webpack_require__.d(mutations_namespaceObject, "changePassword", function() { return changePassword; });
__webpack_require__.d(mutations_namespaceObject, "sendAccountVerificationLink", function() { return sendAccountVerificationLink; });
__webpack_require__.d(mutations_namespaceObject, "sendResetPasswordLink", function() { return sendResetPasswordLink; });
__webpack_require__.d(mutations_namespaceObject, "signUpWithEmail", function() { return signUpWithEmail; });
__webpack_require__.d(mutations_namespaceObject, "verifyAccount", function() { return verifyAccount; });
var EnvVars_namespaceObject = {};
__webpack_require__.r(EnvVars_namespaceObject);
__webpack_require__.d(EnvVars_namespaceObject, "getEnvVars", function() { return getEnvVars; });
var queries_Expense_namespaceObject = {};
__webpack_require__.r(queries_Expense_namespaceObject);
__webpack_require__.d(queries_Expense_namespaceObject, "getExpenses", function() { return getExpenses; });
var queries_namespaceObject = {};
__webpack_require__.r(queries_namespaceObject);
__webpack_require__.d(queries_namespaceObject, "getEnvVars", function() { return getEnvVars; });
__webpack_require__.d(queries_namespaceObject, "getExpenses", function() { return getExpenses; });

// EXTERNAL MODULE: external "@phc/argon2"
var argon2_ = __webpack_require__(6);
var argon2_default = /*#__PURE__*/__webpack_require__.n(argon2_);

// EXTERNAL MODULE: external "micro-cors"
var external_micro_cors_ = __webpack_require__(7);
var external_micro_cors_default = /*#__PURE__*/__webpack_require__.n(external_micro_cors_);

// EXTERNAL MODULE: external "upash"
var external_upash_ = __webpack_require__(3);
var external_upash_default = /*#__PURE__*/__webpack_require__.n(external_upash_);

// EXTERNAL MODULE: external "apollo-server-micro"
var external_apollo_server_micro_ = __webpack_require__(8);

// EXTERNAL MODULE: external "cuid"
var external_cuid_ = __webpack_require__(9);
var external_cuid_default = /*#__PURE__*/__webpack_require__.n(external_cuid_);

// CONCATENATED MODULE: ./src/graphql/utils/getUserByJWT.js

async function getUserByJWT(jwt) {
  console.log('jwt:', jwt); // TODO:
  // - validate jwt
  // - find user in DB and return

  return {
    id: external_cuid_default()()
  };
}
// CONCATENATED MODULE: ./src/graphql/utils/hashPassword.js

async function hashPassword(password) {
  const hash = await external_upash_default.a.use('argon2').hash(password);
  return hash;
}
// CONCATENATED MODULE: ./src/graphql/utils/index.js


// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(0);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./src/mongoose/connectors/Expense.js

const schema = new external_mongoose_["Schema"]({
  amount: {
    type: Number
  },
  date: {
    type: Date
  },
  paymentMethod: {
    type: String
  },
  type: {
    type: String
  }
});
const Expense_name = 'Expense';
const ExpenseConnector = external_mongoose_["models"][Expense_name] || Object(external_mongoose_["model"])(Expense_name, schema);
// EXTERNAL MODULE: external "dataloader"
var external_dataloader_ = __webpack_require__(10);
var external_dataloader_default = /*#__PURE__*/__webpack_require__.n(external_dataloader_);

// EXTERNAL MODULE: external "fast-json-stable-stringify"
var external_fast_json_stable_stringify_ = __webpack_require__(11);
var external_fast_json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(external_fast_json_stable_stringify_);

// EXTERNAL MODULE: external "sift"
var external_sift_ = __webpack_require__(12);
var external_sift_default = /*#__PURE__*/__webpack_require__.n(external_sift_);

// CONCATENATED MODULE: ./src/mongoose/createMongooseBatchLoader.js
 // generates our batch loader function for plugging into a DataLoader, running
// the queries against the provided mongoose model

function createMongooseBatchLoader(connector) {
  async function batchLoadQueries(queries) {
    // use the $or operator to combine all of our queries into a single DB op
    const query = connector.find({
      $or: queries
    });
    const queryResults = await query; // use sift.js to filter our results in memory using the exact same queries to
    // emulate a response for each query that was passed.

    const results = queries.map(q => queryResults.filter(external_sift_default()(q)));
    return results;
  }

  return batchLoadQueries;
}
// CONCATENATED MODULE: ./src/mongoose/createMongooseDataLoader.js


 // simple wrapper abstracting DataLoader creation, preconfiguring it with a
// specific cache key function and injecting our mongoose batch loader function

function createMongooseDataLoader(connector) {
  return new external_dataloader_default.a(createMongooseBatchLoader(connector), {
    // determnistic so our queries correctly caches
    cacheKeyFn: external_fast_json_stable_stringify_default.a
  });
}
// CONCATENATED MODULE: ./src/mongoose/Model.js

 // thin wrapper around a connector (mongoose model) that provides us an interface
// to delegate all of our retrieval methods to a DataLoader instance.

class Model_Model {
  constructor(config) {
    this.connector = config.connector;
    this.loader = createMongooseDataLoader(this.connector);
    this.isDiscriminator = Boolean(this.connector.baseModelName);
  }

  createDiscriminatorQuery(query) {
    if (this.isDiscriminator) {
      return { ...query,
        __t: this.connector.modelName
      };
    }

    return query;
  } // escape hatch method that applies any transformatons to our query we'd expect


  query(query) {
    const transformedQuery = this.createDiscriminatorQuery(query);
    return this.connector.find(transformedQuery);
  } // simple pass through allowing easy extension in a subclass


  async load(query) {
    const transformedQuery = this.createDiscriminatorQuery(query);
    const result = await this.loader.load(transformedQuery);
    return result;
  }

  async find(query) {
    const rawResult = await this.load(query);
    const records = rawResult.filter(Boolean);
    return records;
  }

  async findOne(query) {
    const [record] = await this.load(query);
    return record;
  }

  async findByID(id) {
    let record;

    if (!record) {
      const query = {
        _id: typeof id === 'string' ? new external_mongoose_default.a.Schema.Types.ObjectId(id) : id
      };
      record = await this.findOne(query);
    }

    return record;
  }

  async findOneAndUpdate(criteria, update, opts) {
    const defaultOpts = {
      new: true,
      runValidators: true
    };
    const finalOpts = { ...defaultOpts,
      ...opts
    };
    const record = await this.connector.findOneAndUpdate(criteria, update, finalOpts).lean().exec();
    return record;
  }

  async findByIDAndUpdate(id, update, opts) {
    const criteria = {
      _id: typeof id === 'string' ? new external_mongoose_default.a.Schema.Types.ObjectId(id) : id
    };
    const defaultOpts = {
      new: true,
      runValidators: true
    };
    const finalOpts = { ...defaultOpts,
      ...opts
    };
    const record = await this.findOneAndUpdate(criteria, update, finalOpts);
    return record;
  }

  async findByIDAndDelete(id) {
    const record = await this.connector.findByIdAndDelete(id).lean().exec();
    return record;
  }

  async findOneAndDelete(criteria) {
    const record = await this.connector.findOneAndDelete(criteria).lean().exec();
    return record;
  }

}
// CONCATENATED MODULE: ./src/mongoose/models/Expense.js

class Expense_ExpenseModel extends Model_Model {
  async create(expenseDoc) {
    const result = await this.connector.create(expenseDoc);
    return result;
  }

}
// CONCATENATED MODULE: ./src/enums/role.js
const ROLE = {
  ADMIN: 0,
  USER: 1
};
// CONCATENATED MODULE: ./src/mongoose/connectors/User.js


const User_schema = new external_mongoose_["Schema"]({
  email: {
    type: String,
    unique: true,
    required: true
  },
  passwordHash: {
    type: String
  },
  name: {
    type: String
  },
  roles: {
    type: [Number],
    default: [ROLE.USER],
    validate: {
      validator(value) {
        const ROLES = Object.values(ROLE);
        return value.every(role => ROLES.includes(role));
      },

      message: '{VALUE} is not a valid role'
    }
  },
  lastLoggedInAt: {
    type: Date
  },
  passwordChangedAt: {
    type: Date
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationSecret: {
    type: String
  },
  resetPasswordSecret: {
    type: String
  }
}, {
  timestamps: true
});
const User_name = 'User';
const UserConnector = models[User_name] || Object(external_mongoose_["model"])(User_name, User_schema);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(1);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// CONCATENATED MODULE: ./src/graphql/utils/generateAccountVerificationSecret.js

const CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1d',
  issuer: process.env.JWT_ISSUER
};
function generateAccountVerificationSecret(userID) {
  return external_jsonwebtoken_default.a.sign({
    userID
  }, process.env.ACCOUNT_VERIFICATION_SECRET, CONFIG);
}
// CONCATENATED MODULE: ./src/mongoose/models/User.js


class User_UserModel extends Model_Model {
  async create(userDoc) {
    let user = await this.connector.create(userDoc);
    user = await this.findByIDAndUpdate(user._id, {
      $set: {
        verificationSecret: generateAccountVerificationSecret(user._id.toString())
      }
    });
    return user;
  }

}
// CONCATENATED MODULE: ./src/mongoose/createContextModels.js




const createContextModels = () => ({
  Expense: new Expense_ExpenseModel({
    connector: ExpenseConnector
  }),
  User: new User_UserModel({
    connector: UserConnector
  })
});
// CONCATENATED MODULE: ./src/graphql/createContext.js


const createContext = async ({
  req
}) => {
  const jwt = req.headers.authorization;
  let user;

  if (jwt) {
    user = await getUserByJWT(req.headers.authorization);
  }

  return {
    db: createContextModels(),
    user
  };
};
// EXTERNAL MODULE: external "@saeris/graphql-scalars"
var graphql_scalars_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/graphql/mutations/Expense/addExpense.js
// import cuid from 'cuid';
// import { expenses } from '../../../dataStore';
async function addExpense(_, {
  input
}, ctx) {
  try {
    const expense = await ctx.db.Expense.create(input);
    return {
      expense,
      error: null
    };
  } catch (error) {
    return {
      expense: null,
      error: {
        message: error.message
      }
    };
  }
}
addExpense.typeDef =
/* GraphQL */
`
  extend type Mutation {
    addExpense(input: AddExpenseInput!): AddExpenseResponse!
  }

  input AddExpenseInput {
    amount: Float!
    date: String!
    paymentMethod: String!
    type: String!
  }

  type AddExpenseResponse implements MutationResponse {
    expense: Expense
    error: Error
  }
`;
// CONCATENATED MODULE: ./src/graphql/mutations/Expense/index.js

// EXTERNAL MODULE: external "invariant"
var external_invariant_ = __webpack_require__(2);
var external_invariant_default = /*#__PURE__*/__webpack_require__.n(external_invariant_);

// CONCATENATED MODULE: ./src/graphql/utils/generatePasswordResetSecret.js

const generatePasswordResetSecret_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30m',
  issuer: process.env.JWT_ISSUER
};
function generatePasswordResetSecret(userID) {
  return external_jsonwebtoken_default.a.sign({
    userID
  }, process.env.PASSWORD_RESET_SECRET, generatePasswordResetSecret_CONFIG);
}
// CONCATENATED MODULE: ./src/graphql/utils/validatePasswordResetSecret.js


function validatePasswordResetSecret(verificationSecret) {
  external_jsonwebtoken_default.a.verify(verificationSecret, process.env.PASSWORD_RESET_SECRET, generatePasswordResetSecret_CONFIG);
}
// CONCATENATED MODULE: ./src/graphql/mutations/User/changePassword.js



async function changePassword(root, {
  input
}, ctx) {
  const {
    resetPasswordSecret,
    confirmPassword,
    password
  } = input;

  try {
    validatePasswordResetSecret(resetPasswordSecret);
    let user = await ctx.db.User.findOne({
      resetPasswordSecret
    }, ctx);

    if (!user) {
      return {
        passwordChanged: false,
        error: {
          message: 'The account you are trying to change password of cannot be found'
        }
      };
    }

    if (confirmPassword !== password) {
      return {
        passwordChanged: false,
        error: {
          message: 'The provied password field and the confirm password field do not match'
        }
      };
    }

    if (password.length < 6) {
      return {
        passwordChanged: false,
        error: {
          message: 'The provided password is not long enough'
        }
      };
    }

    const passwordHash = await external_upash_default.a.use('argon2').hash(password);
    user = await ctx.db.User.findByIDAndUpdate(user._id, {
      $set: {
        passwordHash
      },
      $unset: {
        resetPasswordSecret: true
      }
    }, ctx);
    external_invariant_default()(user, 'user should be defined');
    return {
      passwordChanged: true,
      error: null
    };
  } catch (error) {
    return {
      passwordChanged: false,
      error: {
        message: 'An unexpected error occurred'
      }
    };
  }
}
changePassword.typeDef =
/* GraphQL */
`
  extend type Mutation {
    changePassword(input: ChangePasswordInput!): ChangePasswordResponse!
  }

  input ChangePasswordInput {
    confirmPassword: String!
    password: String!
    resetPasswordSecret: String!
  }

  type ChangePasswordResponse implements MutationResponse {
    passwordChanged: Boolean!
    error: Error
  }
`;
// EXTERNAL MODULE: external "@sendgrid/mail"
var mail_ = __webpack_require__(4);
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_);

// CONCATENATED MODULE: ./src/enums/emailAddress.js
const EMAIL_ADDRESS = {
  NO_REPLY: 'no-reply@expensesApp.com'
};
// CONCATENATED MODULE: ./src/enums/emailCategory.js
const EMAIL_CATEGORY = {
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_ACCOUNT: 'VERIFY_ACCOUNT'
};
// CONCATENATED MODULE: ./src/graphql/utils/emailAccountVerificationLink.js




function emailAccountVerificationLink(user) {
  external_invariant_default()(user.email && user.verificationSecret, 'user.email and user.verificationSecret should be defined');
  mail_default.a.send({
    from: {
      name: 'Expenses App',
      email: EMAIL_ADDRESS.NO_REPLY
    },
    to: user.email,
    substitutions: {
      link: `${process.env.ACCOUNT_VERIFICATION_URL}?secret=${user.verificationSecret}`,
      name: user.name || 'there'
    },
    text: verifyAccountTemplate,
    subject: 'Expenses App Account Verification',
    categories: [EMAIL_CATEGORY.VERIFY_ACCOUNT]
  });
}
const verifyAccountTemplate = `
Hi {{name}},

Please verify your email address by clicking the following link.

To maintain your security, this link expires in 1 day.

{{link}}

Not meant to receive this message? Just ignore this email.

Thanks,

Expenses App`;
// CONCATENATED MODULE: ./src/graphql/mutations/User/sendAccountVerificationLink.js


async function sendAccountVerificationLink(root, {
  input
}, ctx) {
  let user;

  try {
    user = await ctx.db.User.findOne({
      email: input.email
    }, ctx);

    if (!user) {
      return {
        error: {
          message: 'The account you are trying to verify is not found'
        }
      };
    }

    if (user.verified) {
      return {
        error: {
          message: 'The account you are trying to verify is already verified'
        }
      };
    } // create a secret to reset the password


    const verificationSecret = generateAccountVerificationSecret(user._id.toString()); // store it in the user record

    user = await ctx.db.User.findByIDAndUpdate(user._id, {
      $set: {
        verificationSecret
      }
    }, ctx); // email the reset password link

    await emailAccountVerificationLink(user);
    return {
      error: null
    };
  } catch (error) {
    return {
      error: {
        message: 'An unexpected error occurred.'
      }
    };
  }
}
sendAccountVerificationLink.typeDef =
/* GraphQL */
`
  extend type Mutation {
    sendAccountVerificationLink(
      input: SendAccountVerificationLinkInput!
    ): SendAccountVerificationLinkResponse!
  }

  input SendAccountVerificationLinkInput {
    email: String!
  }

  type SendAccountVerificationLinkResponse implements MutationResponse {
    error: Error
  }
`;
// CONCATENATED MODULE: ./src/graphql/utils/emailPasswordResetLink.js




function emailPasswordResetLink(user) {
  external_invariant_default()(user.email && user.resetPasswordSecret, 'user.email and user.resetPasswordSecret should be defined');
  sendMail({
    from: {
      name: 'Expenses App',
      email: EMAIL_ADDRESS.NO_REPLY
    },
    to: user.email,
    substitutions: {
      link: `${process.env.PASSWORD_RESET_URL}?secret=${user.resetPasswordSecret}`,
      name: user.name || 'there'
    },
    text: resetPasswordEmailTemplate,
    subject: 'Password reset for your Expenses App account',
    categories: [EMAIL_CATEGORY.RESET_PASSWORD]
  });
}
const resetPasswordEmailTemplate = `
Hi {{name}},

Please verify that tou want to reset your password by clicking the following link.


To maintain your security, this link expires in 30 minutes.

{{link}}


Not meant to receive this message? Just ignore this email.

Expenses App`;
// CONCATENATED MODULE: ./src/graphql/mutations/User/sendResetPasswordLink.js


async function sendResetPasswordLink(root, {
  input
}, ctx) {
  let user;

  try {
    user = await ctx.db.User.findOne({
      email: input.email
    }, ctx);

    if (!user) {
      return {
        error: {
          message: 'The user account you are trying to reset the password cannot be found'
        }
      };
    } // create a secret to reset the password


    const resetPasswordSecret = generatePasswordResetSecret(user._id.toString()); // store it in the user record

    user = await ctx.db.User.findByIDAndUpdate(user._id, {
      $set: {
        resetPasswordSecret
      }
    }, ctx);
    return {
      error: null
    };
  } catch (error) {
    return {
      error: {
        message: 'An unexpected error occurred'
      }
    };
  }
}
sendResetPasswordLink.typeDef =
/* GraphQL */
`
  extend type Mutation {
    sendResetPasswordLink(
      input: SendResetPasswordLinkInput!
    ): SendResetPasswordLinkResponse!
  }

  input SendResetPasswordLinkInput {
    email: String!
  }

  type SendResetPasswordLinkResponse implements MutationResponse {
    error: Error
  }
`;
// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/graphql/mutations/User/signUpWithEmail.js



async function signUpWithEmail(_, {
  input
}, ctx) {
  const {
    email,
    password,
    name
  } = input;

  if (!Object(external_validator_["isEmail"])(email)) {
    return {
      created: false,
      error: {
        message: 'Provided email is not an email'
      }
    };
  }

  if (password.length < 6) {
    return {
      created: false,
      error: {
        message: 'Provided password is too short'
      }
    };
  }

  try {
    // hash the password
    const passwordHash = await hashPassword(password); // create the user record

    const user = await ctx.db.User.create({
      email,
      passwordHash,
      name
    });
    await emailAccountVerificationLink(user);
    return {
      created: true,
      error: null
    };
  } catch (error) {
    console.log('error:', error.message);
    return {
      created: false,
      error: {
        message: 'An unexpected error occurred'
      }
    };
  }
}
signUpWithEmail.typeDef =
/* GraphQL */
`
  extend type Mutation {
    signUpWithEmail(input: SignUpWithEmailInput!): SignUpWithEmailResponse!
  }

  input SignUpWithEmailInput {
    email: String!
    password: String!
    name: String!
  }

  type SignUpWithEmailResponse implements MutationResponse {
    created: Boolean!
    error: Error
  }
`;
// CONCATENATED MODULE: ./src/graphql/utils/validateAccountVerificationSecret.js


function validateAccountVerificationSecret(verificationSecret) {
  external_jsonwebtoken_default.a.verify(verificationSecret, process.env.ACCOUNT_VERIFICATION_SECRET, CONFIG);
}
// CONCATENATED MODULE: ./src/graphql/mutations/User/verifyAccount.js


async function verifyAccount(root, {
  input
}, ctx) {
  const {
    verificationSecret
  } = input;

  try {
    validateAccountVerificationSecret(verificationSecret);
    let user = await ctx.db.User.findOne({
      verificationSecret
    }, ctx);

    if (!user) {
      return {
        verified: false,
        error: {
          message: 'The account you are trying to verify cannot be found'
        }
      };
    }

    if (user.verified) {
      return {
        verified: true,
        error: null
      };
    }

    user = await ctx.db.User.findByIDAndUpdate(user._id, {
      $set: {
        verified: true
      },
      $unset: {
        verificationSecret: true
      }
    }, ctx);
    external_invariant_default()(user, 'user should be defined');
    return {
      verified: user.verified,
      error: null
    };
  } catch (error) {
    return {
      verified: false,
      error: {
        message: 'An unexpected error occurred'
      }
    };
  }
}
verifyAccount.typeDef =
/* GraphQL */
`
  extend type Mutation {
    verifyAccount(input: VerifyAccountInput!): VerifyAccountResponse!
  }

  input VerifyAccountInput {
    verificationSecret: String!
  }

  type VerifyAccountResponse implements MutationResponse {
    error: Error
    verified: Boolean!
  }
`;
// CONCATENATED MODULE: ./src/graphql/mutations/User/index.js





// CONCATENATED MODULE: ./src/graphql/mutations/index.js


// CONCATENATED MODULE: ./src/graphql/queries/EnvVars/getEnvVars.js
function getEnvVars() {
  const secret = process.env.SECRET;
  const date = Date.now();
  return {
    secret: `${date} - ${secret ? secret : 'no secret found'}`
  };
}
getEnvVars.typeDef =
/* GraphQL */
`
  extend type Query {
    getEnvVars(input: GetEnvVarsInput!): EnvVars!
  }

  input GetEnvVarsInput {
    """
    dummy field.
    """
    _: Boolean
  }
`;
// CONCATENATED MODULE: ./src/graphql/queries/EnvVars/index.js

// CONCATENATED MODULE: ./src/graphql/queries/Expense/getExpenses.js
async function getExpenses(_, args, ctx) {
  const expenses = await ctx.db.Expense.find({});
  return expenses;
}
getExpenses.typeDef =
/* GraphQL */
`
  extend type Query {
    getExpenses(input: GetExpensesInput!): [Expense]!
  }

  input GetExpensesInput {
    """
    dummy field.
    """
    _: Boolean
  }
`;
// CONCATENATED MODULE: ./src/graphql/queries/Expense/index.js

// CONCATENATED MODULE: ./src/graphql/queries/index.js


// CONCATENATED MODULE: ./src/graphql/schema/EnvVars/index.js
const EnvVars = {};
const typeDef =
/* GraphQL */
`
  type EnvVars {
    secret: String
  }
`;
// CONCATENATED MODULE: ./src/graphql/schema/Expense/index.js
const Expense = {};
const Expense_typeDef =
/* GraphQL */
`
  type Expense {
    amount: Float
    date: String
    id: ID
    paymentMethod: String
    type: String
  }
`;
// CONCATENATED MODULE: ./src/graphql/schema/User/index.js
const User = {};
const User_typeDef =
/* GraphQL */
`
  type User {
    id: ID!
    email: String!
    name: String
    roles: [Int]!
  }
`;
// CONCATENATED MODULE: ./src/graphql/types.js



const types = {
  EnvVars: EnvVars,
  Expense: Expense,
  User: User
};
// CONCATENATED MODULE: ./src/graphql/resolvers.js




const resolvers = { ...types,
  DateTime: graphql_scalars_["DateTime"],
  Query: queries_namespaceObject,
  Mutation: mutations_namespaceObject,
  MutationResponse: {
    __resolveType: () => {
      throw new Error('MutationResponse interface should not be used as a return type');
    }
  }
};
// CONCATENATED MODULE: ./src/graphql/helpers/Error.js
const Error_typeDef =
/* GraphQL */
`
  type Error {
    id: ID!
    type: String!
    title: String!
    message: String!
    helpText: String
  }
`;
// CONCATENATED MODULE: ./src/graphql/helpers/MutationResponse.js
const MutationResponse_typeDef =
/* GraphQL */
`
  interface MutationResponse {
    error: Error
  }
`;
// CONCATENATED MODULE: ./src/graphql/helpers/index.js


// CONCATENATED MODULE: ./src/graphql/rootMutation.js


const rootMutation = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...mutations_Expense_namespaceObject,
  ...mutations_User_namespaceObject
};
// CONCATENATED MODULE: ./src/graphql/rootQuery.js


const rootQuery = {
  // dummy resolver to allow our 'empty' Query type
  _: () => true,
  ...EnvVars_namespaceObject,
  ...queries_Expense_namespaceObject
};
// CONCATENATED MODULE: ./src/graphql/typeDefs.js







const rootSchema =
/* GraphQL */
`
  type Query {
    # TODO add explanation
    # dummy resolver to allow empty type
    _: Boolean
  }

  type Mutation {
    # TODO add explanation
    # dummy resolver to allow empty type
    _: Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`; // $FlowFixMe

const typeDefs = [...Object.values(rootMutation), ...Object.values(rootQuery)] // extract colocated resolver type defs
// $FlowFixMe - ignoring error above marks resolver as `mixed`
.map(resolver => resolver.typeDef) // legacy resolvers do not have colocated typedefs, so filter out undefined
.filter(Boolean) // add our GraphQL type defs, as there's no resolver they can attach to
.concat([typeDef, Expense_typeDef, User_typeDef, graphql_scalars_["DateTimeScalar"], Error_typeDef, MutationResponse_typeDef]).concat(rootSchema);
// CONCATENATED MODULE: ./src/graphql/createHandler.js




const server = new external_apollo_server_micro_["ApolloServer"]({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true,
  playground: true,
  context: createContext
});
const createHandler = () => server.createHandler();
// CONCATENATED MODULE: ./src/mongoose/handleConnectionError.js
const handleConnectionError = error => {
  console.log('handleConnectionError:', error.message);
};
// CONCATENATED MODULE: ./src/mongoose/index.js


const connect = async () => {
  try {
    external_mongoose_default.a.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true
    });
    external_mongoose_default.a.connection.on('error', handleConnectionError);
    external_mongoose_default.a.set('debug', "production" === 'development');
  } catch (error) {
    handleConnectionError(error);
  }
};
// CONCATENATED MODULE: ./src/index.js





 // connect to mongoose

connect(); // setup emailing service

mail_default.a.setApiKey(process.env.SENDGRID_API_KEY); // install password hashing algorithm

if (!external_upash_default.a.list().includes('argon2')) {
  external_upash_default.a.install('argon2', argon2_default.a);
} // export the request handler function


/* harmony default export */ var src = __webpack_exports__["default"] = (external_micro_cors_default()({
  allowMethods: ['POST', 'GET', 'OPTIONS']
})((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  } // eslint-disable-next-line consistent-return


  return createHandler()(req, res);
}));

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=main.js.map
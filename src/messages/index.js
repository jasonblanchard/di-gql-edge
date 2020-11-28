/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.messages = (function() {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    var messages = {};

    messages.entry = (function() {

        /**
         * Namespace entry.
         * @memberof messages
         * @namespace
         */
        var entry = {};

        entry.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof messages.entry
             * @interface IError
             * @property {messages.entry.Error.Code|null} [code] Error code
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof messages.entry
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {messages.entry.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {messages.entry.Error.Code} code
             * @memberof messages.entry.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error message.
             * @member {string} message
             * @memberof messages.entry.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.IError=} [properties] Properties to set
             * @returns {messages.entry.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof messages.entry.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.Error)
                    return object;
                var message = new $root.messages.entry.Error();
                switch (object.code) {
                case "UNKNOWN":
                case 0:
                    message.code = 0;
                    break;
                case "NOT_FOUND":
                case 1:
                    message.code = 1;
                    break;
                case "VALIDATION_FAILED":
                case 2:
                    message.code = 2;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.Error
             * @static
             * @param {messages.entry.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.messages.entry.Error.Code[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof messages.entry.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Code enum.
             * @name messages.entry.Error.Code
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} NOT_FOUND=1 NOT_FOUND value
             * @property {number} VALIDATION_FAILED=2 VALIDATION_FAILED value
             */
            Error.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "NOT_FOUND"] = 1;
                values[valuesById[2] = "VALIDATION_FAILED"] = 2;
                return values;
            })();

            return Error;
        })();

        entry.Principal = (function() {

            /**
             * Properties of a Principal.
             * @memberof messages.entry
             * @interface IPrincipal
             * @property {messages.entry.Principal.Type|null} [type] Principal type
             * @property {string|null} [id] Principal id
             */

            /**
             * Constructs a new Principal.
             * @memberof messages.entry
             * @classdesc Represents a Principal.
             * @implements IPrincipal
             * @constructor
             * @param {messages.entry.IPrincipal=} [properties] Properties to set
             */
            function Principal(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Principal type.
             * @member {messages.entry.Principal.Type} type
             * @memberof messages.entry.Principal
             * @instance
             */
            Principal.prototype.type = 0;

            /**
             * Principal id.
             * @member {string} id
             * @memberof messages.entry.Principal
             * @instance
             */
            Principal.prototype.id = "";

            /**
             * Creates a new Principal instance using the specified properties.
             * @function create
             * @memberof messages.entry.Principal
             * @static
             * @param {messages.entry.IPrincipal=} [properties] Properties to set
             * @returns {messages.entry.Principal} Principal instance
             */
            Principal.create = function create(properties) {
                return new Principal(properties);
            };

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.entry.Principal.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.Principal
             * @static
             * @param {messages.entry.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.entry.Principal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.Principal
             * @static
             * @param {messages.entry.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.Principal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Principal message.
             * @function verify
             * @memberof messages.entry.Principal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Principal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Principal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.Principal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.Principal} Principal
             */
            Principal.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.Principal)
                    return object;
                var message = new $root.messages.entry.Principal();
                switch (object.type) {
                case "USER":
                case 0:
                    message.type = 0;
                    break;
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.Principal
             * @static
             * @param {messages.entry.Principal} message Principal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Principal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "USER" : 0;
                    object.id = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.messages.entry.Principal.Type[message.type] : message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Principal to JSON.
             * @function toJSON
             * @memberof messages.entry.Principal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Principal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name messages.entry.Principal.Type
             * @enum {string}
             * @property {number} USER=0 USER value
             */
            Principal.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER"] = 0;
                return values;
            })();

            return Principal;
        })();

        entry.RequestContext = (function() {

            /**
             * Properties of a RequestContext.
             * @memberof messages.entry
             * @interface IRequestContext
             * @property {string|null} [traceId] RequestContext traceId
             * @property {messages.entry.IPrincipal|null} [principal] RequestContext principal
             */

            /**
             * Constructs a new RequestContext.
             * @memberof messages.entry
             * @classdesc Represents a RequestContext.
             * @implements IRequestContext
             * @constructor
             * @param {messages.entry.IRequestContext=} [properties] Properties to set
             */
            function RequestContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestContext traceId.
             * @member {string} traceId
             * @memberof messages.entry.RequestContext
             * @instance
             */
            RequestContext.prototype.traceId = "";

            /**
             * RequestContext principal.
             * @member {messages.entry.IPrincipal|null|undefined} principal
             * @memberof messages.entry.RequestContext
             * @instance
             */
            RequestContext.prototype.principal = null;

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @function create
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.IRequestContext=} [properties] Properties to set
             * @returns {messages.entry.RequestContext} RequestContext instance
             */
            RequestContext.create = function create(properties) {
                return new RequestContext(properties);
            };

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceId);
                if (message.principal != null && message.hasOwnProperty("principal"))
                    $root.messages.entry.Principal.encode(message.principal, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.RequestContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.traceId = reader.string();
                        break;
                    case 3:
                        message.principal = $root.messages.entry.Principal.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestContext message.
             * @function verify
             * @memberof messages.entry.RequestContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.principal != null && message.hasOwnProperty("principal")) {
                    var error = $root.messages.entry.Principal.verify(message.principal);
                    if (error)
                        return "principal." + error;
                }
                return null;
            };

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.RequestContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.RequestContext} RequestContext
             */
            RequestContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.RequestContext)
                    return object;
                var message = new $root.messages.entry.RequestContext();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.principal != null) {
                    if (typeof object.principal !== "object")
                        throw TypeError(".messages.entry.RequestContext.principal: object expected");
                    message.principal = $root.messages.entry.Principal.fromObject(object.principal);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.RequestContext
             * @static
             * @param {messages.entry.RequestContext} message RequestContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.principal = null;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.principal != null && message.hasOwnProperty("principal"))
                    object.principal = $root.messages.entry.Principal.toObject(message.principal, options);
                return object;
            };

            /**
             * Converts this RequestContext to JSON.
             * @function toJSON
             * @memberof messages.entry.RequestContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestContext;
        })();

        entry.GetEntryRequest = (function() {

            /**
             * Properties of a GetEntryRequest.
             * @memberof messages.entry
             * @interface IGetEntryRequest
             * @property {messages.entry.IRequestContext|null} [context] GetEntryRequest context
             * @property {messages.entry.GetEntryRequest.IPayload|null} [payload] GetEntryRequest payload
             */

            /**
             * Constructs a new GetEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents a GetEntryRequest.
             * @implements IGetEntryRequest
             * @constructor
             * @param {messages.entry.IGetEntryRequest=} [properties] Properties to set
             */
            function GetEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.context = null;

            /**
             * GetEntryRequest payload.
             * @member {messages.entry.GetEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.GetEntryRequest
             * @instance
             */
            GetEntryRequest.prototype.payload = null;

            /**
             * Creates a new GetEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.IGetEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest instance
             */
            GetEntryRequest.create = function create(properties) {
                return new GetEntryRequest(properties);
            };

            /**
             * Encodes the specified GetEntryRequest message. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.IGetEntryRequest} message GetEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.GetEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetEntryRequest message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.IGetEntryRequest} message GetEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 4:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.payload = $root.messages.entry.GetEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetEntryRequest message.
             * @function verify
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.GetEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a GetEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.GetEntryRequest} GetEntryRequest
             */
            GetEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.GetEntryRequest)
                    return object;
                var message = new $root.messages.entry.GetEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.GetEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.GetEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.GetEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.GetEntryRequest
             * @static
             * @param {messages.entry.GetEntryRequest} message GetEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.GetEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this GetEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.GetEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.GetEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.GetEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.GetEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.GetEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.GetEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.GetEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @static
                 * @param {messages.entry.GetEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.GetEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return GetEntryRequest;
        })();

        entry.GetEntryResponse = (function() {

            /**
             * Properties of a GetEntryResponse.
             * @memberof messages.entry
             * @interface IGetEntryResponse
             * @property {messages.entry.GetEntryResponse.IPayload|null} [payload] GetEntryResponse payload
             * @property {messages.entry.IError|null} [error] GetEntryResponse error
             * @property {string|null} [traceId] GetEntryResponse traceId
             */

            /**
             * Constructs a new GetEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents a GetEntryResponse.
             * @implements IGetEntryResponse
             * @constructor
             * @param {messages.entry.IGetEntryResponse=} [properties] Properties to set
             */
            function GetEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetEntryResponse payload.
             * @member {messages.entry.GetEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.entry.GetEntryResponse
             * @instance
             */
            GetEntryResponse.prototype.payload = null;

            /**
             * GetEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.GetEntryResponse
             * @instance
             */
            GetEntryResponse.prototype.error = null;

            /**
             * GetEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.GetEntryResponse
             * @instance
             */
            GetEntryResponse.prototype.traceId = "";

            /**
             * Creates a new GetEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.IGetEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse instance
             */
            GetEntryResponse.create = function create(properties) {
                return new GetEntryResponse(properties);
            };

            /**
             * Encodes the specified GetEntryResponse message. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.IGetEntryResponse} message GetEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.GetEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified GetEntryResponse message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.IGetEntryResponse} message GetEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.GetEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetEntryResponse message.
             * @function verify
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.GetEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a GetEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.GetEntryResponse} GetEntryResponse
             */
            GetEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.GetEntryResponse)
                    return object;
                var message = new $root.messages.entry.GetEntryResponse();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.GetEntryResponse.payload: object expected");
                    message.payload = $root.messages.entry.GetEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.GetEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a GetEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.GetEntryResponse
             * @static
             * @param {messages.entry.GetEntryResponse} message GetEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.error = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.GetEntryResponse.Payload.toObject(message.payload, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this GetEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.GetEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.GetEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.GetEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.GetEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.GetEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.GetEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.GetEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.entry.GetEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.entry.GetEntryResponse.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.entry.GetEntryResponse.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @static
                 * @param {messages.entry.GetEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.GetEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return GetEntryResponse;
        })();

        entry.CreateEntryRequest = (function() {

            /**
             * Properties of a CreateEntryRequest.
             * @memberof messages.entry
             * @interface ICreateEntryRequest
             * @property {messages.entry.IRequestContext|null} [context] CreateEntryRequest context
             * @property {messages.entry.CreateEntryRequest.IPayload|null} [payload] CreateEntryRequest payload
             */

            /**
             * Constructs a new CreateEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents a CreateEntryRequest.
             * @implements ICreateEntryRequest
             * @constructor
             * @param {messages.entry.ICreateEntryRequest=} [properties] Properties to set
             */
            function CreateEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.context = null;

            /**
             * CreateEntryRequest payload.
             * @member {messages.entry.CreateEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             */
            CreateEntryRequest.prototype.payload = null;

            /**
             * Creates a new CreateEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.ICreateEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest instance
             */
            CreateEntryRequest.create = function create(properties) {
                return new CreateEntryRequest(properties);
            };

            /**
             * Encodes the specified CreateEntryRequest message. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.ICreateEntryRequest} message CreateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.CreateEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CreateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.ICreateEntryRequest} message CreateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 4:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.payload = $root.messages.entry.CreateEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateEntryRequest message.
             * @function verify
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.CreateEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a CreateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.CreateEntryRequest} CreateEntryRequest
             */
            CreateEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.CreateEntryRequest)
                    return object;
                var message = new $root.messages.entry.CreateEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.CreateEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.CreateEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.CreateEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.CreateEntryRequest
             * @static
             * @param {messages.entry.CreateEntryRequest} message CreateEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.CreateEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this CreateEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.CreateEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CreateEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.CreateEntryRequest
                 * @interface IPayload
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.CreateEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.CreateEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.text = reader.string();
                            break;
                        case 2:
                            message.creatorId = reader.string();
                            break;
                        case 3:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.CreateEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.CreateEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.CreateEntryRequest.Payload();
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.entry.CreateEntryRequest.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.entry.CreateEntryRequest.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.CreateEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.CreateEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return CreateEntryRequest;
        })();

        entry.CreateEntryResponse = (function() {

            /**
             * Properties of a CreateEntryResponse.
             * @memberof messages.entry
             * @interface ICreateEntryResponse
             * @property {messages.entry.CreateEntryResponse.IPayload|null} [payload] CreateEntryResponse payload
             * @property {messages.entry.IError|null} [error] CreateEntryResponse error
             * @property {string|null} [traceId] CreateEntryResponse traceId
             */

            /**
             * Constructs a new CreateEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents a CreateEntryResponse.
             * @implements ICreateEntryResponse
             * @constructor
             * @param {messages.entry.ICreateEntryResponse=} [properties] Properties to set
             */
            function CreateEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateEntryResponse payload.
             * @member {messages.entry.CreateEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             */
            CreateEntryResponse.prototype.payload = null;

            /**
             * CreateEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             */
            CreateEntryResponse.prototype.error = null;

            /**
             * CreateEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             */
            CreateEntryResponse.prototype.traceId = "";

            /**
             * Creates a new CreateEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.ICreateEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse instance
             */
            CreateEntryResponse.create = function create(properties) {
                return new CreateEntryResponse(properties);
            };

            /**
             * Encodes the specified CreateEntryResponse message. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.ICreateEntryResponse} message CreateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.CreateEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified CreateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.ICreateEntryResponse} message CreateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.CreateEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateEntryResponse message.
             * @function verify
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.CreateEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a CreateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.CreateEntryResponse} CreateEntryResponse
             */
            CreateEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.CreateEntryResponse)
                    return object;
                var message = new $root.messages.entry.CreateEntryResponse();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.CreateEntryResponse.payload: object expected");
                    message.payload = $root.messages.entry.CreateEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.CreateEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a CreateEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.CreateEntryResponse
             * @static
             * @param {messages.entry.CreateEntryResponse} message CreateEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.error = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.CreateEntryResponse.Payload.toObject(message.payload, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this CreateEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.CreateEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CreateEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.CreateEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.CreateEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.CreateEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.CreateEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.CreateEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.CreateEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.entry.CreateEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.CreateEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.CreateEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return CreateEntryResponse;
        })();

        entry.UpdateEntryRequest = (function() {

            /**
             * Properties of an UpdateEntryRequest.
             * @memberof messages.entry
             * @interface IUpdateEntryRequest
             * @property {messages.entry.IRequestContext|null} [context] UpdateEntryRequest context
             * @property {messages.entry.UpdateEntryRequest.IPayload|null} [payload] UpdateEntryRequest payload
             */

            /**
             * Constructs a new UpdateEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents an UpdateEntryRequest.
             * @implements IUpdateEntryRequest
             * @constructor
             * @param {messages.entry.IUpdateEntryRequest=} [properties] Properties to set
             */
            function UpdateEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.UpdateEntryRequest
             * @instance
             */
            UpdateEntryRequest.prototype.context = null;

            /**
             * UpdateEntryRequest payload.
             * @member {messages.entry.UpdateEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.UpdateEntryRequest
             * @instance
             */
            UpdateEntryRequest.prototype.payload = null;

            /**
             * Creates a new UpdateEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.IUpdateEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest instance
             */
            UpdateEntryRequest.create = function create(properties) {
                return new UpdateEntryRequest(properties);
            };

            /**
             * Encodes the specified UpdateEntryRequest message. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.IUpdateEntryRequest} message UpdateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.UpdateEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.IUpdateEntryRequest} message UpdateEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.entry.UpdateEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateEntryRequest message.
             * @function verify
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.UpdateEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an UpdateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.UpdateEntryRequest} UpdateEntryRequest
             */
            UpdateEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.UpdateEntryRequest)
                    return object;
                var message = new $root.messages.entry.UpdateEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.UpdateEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.UpdateEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.UpdateEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdateEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.UpdateEntryRequest
             * @static
             * @param {messages.entry.UpdateEntryRequest} message UpdateEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.UpdateEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this UpdateEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.UpdateEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdateEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.UpdateEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.UpdateEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.UpdateEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.UpdateEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.UpdateEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.UpdateEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.UpdateEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return UpdateEntryRequest;
        })();

        entry.UpdateEntryResponse = (function() {

            /**
             * Properties of an UpdateEntryResponse.
             * @memberof messages.entry
             * @interface IUpdateEntryResponse
             * @property {messages.entry.UpdateEntryResponse.IPayload|null} [payload] UpdateEntryResponse payload
             * @property {messages.entry.IError|null} [error] UpdateEntryResponse error
             * @property {string|null} [traceId] UpdateEntryResponse traceId
             */

            /**
             * Constructs a new UpdateEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents an UpdateEntryResponse.
             * @implements IUpdateEntryResponse
             * @constructor
             * @param {messages.entry.IUpdateEntryResponse=} [properties] Properties to set
             */
            function UpdateEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateEntryResponse payload.
             * @member {messages.entry.UpdateEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             */
            UpdateEntryResponse.prototype.payload = null;

            /**
             * UpdateEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             */
            UpdateEntryResponse.prototype.error = null;

            /**
             * UpdateEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             */
            UpdateEntryResponse.prototype.traceId = "";

            /**
             * Creates a new UpdateEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.IUpdateEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse instance
             */
            UpdateEntryResponse.create = function create(properties) {
                return new UpdateEntryResponse(properties);
            };

            /**
             * Encodes the specified UpdateEntryResponse message. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.IUpdateEntryResponse} message UpdateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.UpdateEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified UpdateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.IUpdateEntryResponse} message UpdateEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.UpdateEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateEntryResponse message.
             * @function verify
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.UpdateEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates an UpdateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.UpdateEntryResponse} UpdateEntryResponse
             */
            UpdateEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.UpdateEntryResponse)
                    return object;
                var message = new $root.messages.entry.UpdateEntryResponse();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.UpdateEntryResponse.payload: object expected");
                    message.payload = $root.messages.entry.UpdateEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.UpdateEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from an UpdateEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.UpdateEntryResponse
             * @static
             * @param {messages.entry.UpdateEntryResponse} message UpdateEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.payload = null;
                    object.error = null;
                    object.traceId = "";
                }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.UpdateEntryResponse.Payload.toObject(message.payload, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this UpdateEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.UpdateEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UpdateEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.UpdateEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.UpdateEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.UpdateEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.UpdateEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.UpdateEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.UpdateEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.entry.UpdateEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.entry.UpdateEntryResponse.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.entry.UpdateEntryResponse.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @static
                 * @param {messages.entry.UpdateEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.UpdateEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return UpdateEntryResponse;
        })();

        entry.ListEntriesRequest = (function() {

            /**
             * Properties of a ListEntriesRequest.
             * @memberof messages.entry
             * @interface IListEntriesRequest
             * @property {messages.entry.IRequestContext|null} [context] ListEntriesRequest context
             * @property {messages.entry.ListEntriesRequest.IPayload|null} [payload] ListEntriesRequest payload
             */

            /**
             * Constructs a new ListEntriesRequest.
             * @memberof messages.entry
             * @classdesc Represents a ListEntriesRequest.
             * @implements IListEntriesRequest
             * @constructor
             * @param {messages.entry.IListEntriesRequest=} [properties] Properties to set
             */
            function ListEntriesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.context = null;

            /**
             * ListEntriesRequest payload.
             * @member {messages.entry.ListEntriesRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.payload = null;

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.IListEntriesRequest=} [properties] Properties to set
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest instance
             */
            ListEntriesRequest.create = function create(properties) {
                return new ListEntriesRequest(properties);
            };

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.ListEntriesRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.entry.ListEntriesRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesRequest message.
             * @function verify
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.ListEntriesRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.ListEntriesRequest} ListEntriesRequest
             */
            ListEntriesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.ListEntriesRequest)
                    return object;
                var message = new $root.messages.entry.ListEntriesRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.ListEntriesRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.ListEntriesRequest.payload: object expected");
                    message.payload = $root.messages.entry.ListEntriesRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.ListEntriesRequest
             * @static
             * @param {messages.entry.ListEntriesRequest} message ListEntriesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.ListEntriesRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ListEntriesRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.ListEntriesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.ListEntriesRequest
                 * @interface IPayload
                 * @property {number|null} [first] Payload first
                 * @property {string|null} [after] Payload after
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.ListEntriesRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.ListEntriesRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload first.
                 * @member {number} first
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.first = 0;

                /**
                 * Payload after.
                 * @member {string} after
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.after = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.first != null && message.hasOwnProperty("first"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.first);
                    if (message.after != null && message.hasOwnProperty("after"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.after);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.first = reader.int32();
                            break;
                        case 2:
                            message.after = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.first != null && message.hasOwnProperty("first"))
                        if (!$util.isInteger(message.first))
                            return "first: integer expected";
                    if (message.after != null && message.hasOwnProperty("after"))
                        if (!$util.isString(message.after))
                            return "after: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.ListEntriesRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.ListEntriesRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.ListEntriesRequest.Payload();
                    if (object.first != null)
                        message.first = object.first | 0;
                    if (object.after != null)
                        message.after = String(object.after);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.entry.ListEntriesRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.first = 0;
                        object.after = "";
                        object.creatorId = "";
                    }
                    if (message.first != null && message.hasOwnProperty("first"))
                        object.first = message.first;
                    if (message.after != null && message.hasOwnProperty("after"))
                        object.after = message.after;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.ListEntriesRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ListEntriesRequest;
        })();

        entry.ListEntriesResponse = (function() {

            /**
             * Properties of a ListEntriesResponse.
             * @memberof messages.entry
             * @interface IListEntriesResponse
             * @property {Array.<messages.entry.ListEntriesResponse.IEntity>|null} [payload] ListEntriesResponse payload
             * @property {messages.entry.IError|null} [error] ListEntriesResponse error
             * @property {string|null} [traceId] ListEntriesResponse traceId
             * @property {messages.entry.ListEntriesResponse.IPageInfo|null} [pageInfo] ListEntriesResponse pageInfo
             */

            /**
             * Constructs a new ListEntriesResponse.
             * @memberof messages.entry
             * @classdesc Represents a ListEntriesResponse.
             * @implements IListEntriesResponse
             * @constructor
             * @param {messages.entry.IListEntriesResponse=} [properties] Properties to set
             */
            function ListEntriesResponse(properties) {
                this.payload = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesResponse payload.
             * @member {Array.<messages.entry.ListEntriesResponse.IEntity>} payload
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.payload = $util.emptyArray;

            /**
             * ListEntriesResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.error = null;

            /**
             * ListEntriesResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.traceId = "";

            /**
             * ListEntriesResponse pageInfo.
             * @member {messages.entry.ListEntriesResponse.IPageInfo|null|undefined} pageInfo
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.pageInfo = null;

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.IListEntriesResponse=} [properties] Properties to set
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse instance
             */
            ListEntriesResponse.create = function create(properties) {
                return new ListEntriesResponse(properties);
            };

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.payload.length)
                    for (var i = 0; i < message.payload.length; ++i)
                        $root.messages.entry.ListEntriesResponse.Entity.encode(message.payload[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                    $root.messages.entry.ListEntriesResponse.PageInfo.encode(message.pageInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.payload && message.payload.length))
                            message.payload = [];
                        message.payload.push($root.messages.entry.ListEntriesResponse.Entity.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    case 4:
                        message.pageInfo = $root.messages.entry.ListEntriesResponse.PageInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesResponse message.
             * @function verify
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    if (!Array.isArray(message.payload))
                        return "payload: array expected";
                    for (var i = 0; i < message.payload.length; ++i) {
                        var error = $root.messages.entry.ListEntriesResponse.Entity.verify(message.payload[i]);
                        if (error)
                            return "payload." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                    var error = $root.messages.entry.ListEntriesResponse.PageInfo.verify(message.pageInfo);
                    if (error)
                        return "pageInfo." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.ListEntriesResponse} ListEntriesResponse
             */
            ListEntriesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.ListEntriesResponse)
                    return object;
                var message = new $root.messages.entry.ListEntriesResponse();
                if (object.payload) {
                    if (!Array.isArray(object.payload))
                        throw TypeError(".messages.entry.ListEntriesResponse.payload: array expected");
                    message.payload = [];
                    for (var i = 0; i < object.payload.length; ++i) {
                        if (typeof object.payload[i] !== "object")
                            throw TypeError(".messages.entry.ListEntriesResponse.payload: object expected");
                        message.payload[i] = $root.messages.entry.ListEntriesResponse.Entity.fromObject(object.payload[i]);
                    }
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.ListEntriesResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.pageInfo != null) {
                    if (typeof object.pageInfo !== "object")
                        throw TypeError(".messages.entry.ListEntriesResponse.pageInfo: object expected");
                    message.pageInfo = $root.messages.entry.ListEntriesResponse.PageInfo.fromObject(object.pageInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.ListEntriesResponse
             * @static
             * @param {messages.entry.ListEntriesResponse} message ListEntriesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.payload = [];
                if (options.defaults) {
                    object.error = null;
                    object.traceId = "";
                    object.pageInfo = null;
                }
                if (message.payload && message.payload.length) {
                    object.payload = [];
                    for (var j = 0; j < message.payload.length; ++j)
                        object.payload[j] = $root.messages.entry.ListEntriesResponse.Entity.toObject(message.payload[j], options);
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                    object.pageInfo = $root.messages.entry.ListEntriesResponse.PageInfo.toObject(message.pageInfo, options);
                return object;
            };

            /**
             * Converts this ListEntriesResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.ListEntriesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesResponse.PageInfo = (function() {

                /**
                 * Properties of a PageInfo.
                 * @memberof messages.entry.ListEntriesResponse
                 * @interface IPageInfo
                 * @property {number|null} [totalCount] PageInfo totalCount
                 * @property {boolean|null} [hasNextPage] PageInfo hasNextPage
                 * @property {string|null} [startCursor] PageInfo startCursor
                 * @property {string|null} [endCursor] PageInfo endCursor
                 */

                /**
                 * Constructs a new PageInfo.
                 * @memberof messages.entry.ListEntriesResponse
                 * @classdesc Represents a PageInfo.
                 * @implements IPageInfo
                 * @constructor
                 * @param {messages.entry.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 */
                function PageInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PageInfo totalCount.
                 * @member {number} totalCount
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.totalCount = 0;

                /**
                 * PageInfo hasNextPage.
                 * @member {boolean} hasNextPage
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.hasNextPage = false;

                /**
                 * PageInfo startCursor.
                 * @member {string} startCursor
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.startCursor = "";

                /**
                 * PageInfo endCursor.
                 * @member {string} endCursor
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.endCursor = "";

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo instance
                 */
                PageInfo.create = function create(properties) {
                    return new PageInfo(properties);
                };

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCount);
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasNextPage);
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.startCursor);
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.endCursor);
                    return writer;
                };

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesResponse.PageInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.totalCount = reader.int32();
                            break;
                        case 2:
                            message.hasNextPage = reader.bool();
                            break;
                        case 3:
                            message.startCursor = reader.string();
                            break;
                        case 4:
                            message.endCursor = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PageInfo message.
                 * @function verify
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PageInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        if (!$util.isInteger(message.totalCount))
                            return "totalCount: integer expected";
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        if (typeof message.hasNextPage !== "boolean")
                            return "hasNextPage: boolean expected";
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        if (!$util.isString(message.startCursor))
                            return "startCursor: string expected";
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        if (!$util.isString(message.endCursor))
                            return "endCursor: string expected";
                    return null;
                };

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.ListEntriesResponse.PageInfo} PageInfo
                 */
                PageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.ListEntriesResponse.PageInfo)
                        return object;
                    var message = new $root.messages.entry.ListEntriesResponse.PageInfo();
                    if (object.totalCount != null)
                        message.totalCount = object.totalCount | 0;
                    if (object.hasNextPage != null)
                        message.hasNextPage = Boolean(object.hasNextPage);
                    if (object.startCursor != null)
                        message.startCursor = String(object.startCursor);
                    if (object.endCursor != null)
                        message.endCursor = String(object.endCursor);
                    return message;
                };

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.entry.ListEntriesResponse.PageInfo} message PageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.totalCount = 0;
                        object.hasNextPage = false;
                        object.startCursor = "";
                        object.endCursor = "";
                    }
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        object.totalCount = message.totalCount;
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        object.hasNextPage = message.hasNextPage;
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        object.startCursor = message.startCursor;
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        object.endCursor = message.endCursor;
                    return object;
                };

                /**
                 * Converts this PageInfo to JSON.
                 * @function toJSON
                 * @memberof messages.entry.ListEntriesResponse.PageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PageInfo;
            })();

            ListEntriesResponse.Entity = (function() {

                /**
                 * Properties of an Entity.
                 * @memberof messages.entry.ListEntriesResponse
                 * @interface IEntity
                 * @property {string|null} [id] Entity id
                 * @property {string|null} [text] Entity text
                 * @property {string|null} [creatorId] Entity creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Entity createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Entity updatedAt
                 */

                /**
                 * Constructs a new Entity.
                 * @memberof messages.entry.ListEntriesResponse
                 * @classdesc Represents an Entity.
                 * @implements IEntity
                 * @constructor
                 * @param {messages.entry.ListEntriesResponse.IEntity=} [properties] Properties to set
                 */
                function Entity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Entity id.
                 * @member {string} id
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.id = "";

                /**
                 * Entity text.
                 * @member {string} text
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.text = "";

                /**
                 * Entity creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.creatorId = "";

                /**
                 * Entity createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.createdAt = null;

                /**
                 * Entity updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.updatedAt = null;

                /**
                 * Creates a new Entity instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IEntity=} [properties] Properties to set
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity instance
                 */
                Entity.create = function create(properties) {
                    return new Entity(properties);
                };

                /**
                 * Encodes the specified Entity message. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.ListEntriesResponse.Entity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Entity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Entity message.
                 * @function verify
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Entity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.ListEntriesResponse.Entity} Entity
                 */
                Entity.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.ListEntriesResponse.Entity)
                        return object;
                    var message = new $root.messages.entry.ListEntriesResponse.Entity();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.entry.ListEntriesResponse.Entity.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.entry.ListEntriesResponse.Entity.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.entry.ListEntriesResponse.Entity} message Entity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Entity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Entity to JSON.
                 * @function toJSON
                 * @memberof messages.entry.ListEntriesResponse.Entity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Entity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Entity;
            })();

            return ListEntriesResponse;
        })();

        entry.DeleteEntryRequest = (function() {

            /**
             * Properties of a DeleteEntryRequest.
             * @memberof messages.entry
             * @interface IDeleteEntryRequest
             * @property {messages.entry.IRequestContext|null} [context] DeleteEntryRequest context
             * @property {messages.entry.DeleteEntryRequest.IPayload|null} [payload] DeleteEntryRequest payload
             */

            /**
             * Constructs a new DeleteEntryRequest.
             * @memberof messages.entry
             * @classdesc Represents a DeleteEntryRequest.
             * @implements IDeleteEntryRequest
             * @constructor
             * @param {messages.entry.IDeleteEntryRequest=} [properties] Properties to set
             */
            function DeleteEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteEntryRequest context.
             * @member {messages.entry.IRequestContext|null|undefined} context
             * @memberof messages.entry.DeleteEntryRequest
             * @instance
             */
            DeleteEntryRequest.prototype.context = null;

            /**
             * DeleteEntryRequest payload.
             * @member {messages.entry.DeleteEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.entry.DeleteEntryRequest
             * @instance
             */
            DeleteEntryRequest.prototype.payload = null;

            /**
             * Creates a new DeleteEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.IDeleteEntryRequest=} [properties] Properties to set
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest instance
             */
            DeleteEntryRequest.create = function create(properties) {
                return new DeleteEntryRequest(properties);
            };

            /**
             * Encodes the specified DeleteEntryRequest message. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.IDeleteEntryRequest} message DeleteEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.entry.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.DeleteEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DeleteEntryRequest message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.IDeleteEntryRequest} message DeleteEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.DeleteEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.entry.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.entry.DeleteEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteEntryRequest message.
             * @function verify
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.entry.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.DeleteEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a DeleteEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.DeleteEntryRequest} DeleteEntryRequest
             */
            DeleteEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.DeleteEntryRequest)
                    return object;
                var message = new $root.messages.entry.DeleteEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.entry.DeleteEntryRequest.context: object expected");
                    message.context = $root.messages.entry.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.DeleteEntryRequest.payload: object expected");
                    message.payload = $root.messages.entry.DeleteEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a DeleteEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.DeleteEntryRequest
             * @static
             * @param {messages.entry.DeleteEntryRequest} message DeleteEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.entry.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.DeleteEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this DeleteEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.entry.DeleteEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DeleteEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.DeleteEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.DeleteEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.DeleteEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.DeleteEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.DeleteEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.DeleteEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.entry.DeleteEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @static
                 * @param {messages.entry.DeleteEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.DeleteEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return DeleteEntryRequest;
        })();

        entry.DeleteEntryResponse = (function() {

            /**
             * Properties of a DeleteEntryResponse.
             * @memberof messages.entry
             * @interface IDeleteEntryResponse
             * @property {messages.entry.IError|null} [error] DeleteEntryResponse error
             * @property {string|null} [traceId] DeleteEntryResponse traceId
             */

            /**
             * Constructs a new DeleteEntryResponse.
             * @memberof messages.entry
             * @classdesc Represents a DeleteEntryResponse.
             * @implements IDeleteEntryResponse
             * @constructor
             * @param {messages.entry.IDeleteEntryResponse=} [properties] Properties to set
             */
            function DeleteEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteEntryResponse error.
             * @member {messages.entry.IError|null|undefined} error
             * @memberof messages.entry.DeleteEntryResponse
             * @instance
             */
            DeleteEntryResponse.prototype.error = null;

            /**
             * DeleteEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.entry.DeleteEntryResponse
             * @instance
             */
            DeleteEntryResponse.prototype.traceId = "";

            /**
             * Creates a new DeleteEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.IDeleteEntryResponse=} [properties] Properties to set
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse instance
             */
            DeleteEntryResponse.create = function create(properties) {
                return new DeleteEntryResponse(properties);
            };

            /**
             * Encodes the specified DeleteEntryResponse message. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.IDeleteEntryResponse} message DeleteEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.entry.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified DeleteEntryResponse message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.IDeleteEntryResponse} message DeleteEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.DeleteEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.messages.entry.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteEntryResponse message.
             * @function verify
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.entry.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a DeleteEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.DeleteEntryResponse} DeleteEntryResponse
             */
            DeleteEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.DeleteEntryResponse)
                    return object;
                var message = new $root.messages.entry.DeleteEntryResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.entry.DeleteEntryResponse.error: object expected");
                    message.error = $root.messages.entry.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a DeleteEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.DeleteEntryResponse
             * @static
             * @param {messages.entry.DeleteEntryResponse} message DeleteEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.traceId = "";
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.entry.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this DeleteEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.entry.DeleteEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeleteEntryResponse;
        })();

        entry.InfoEntryCreated = (function() {

            /**
             * Properties of an InfoEntryCreated.
             * @memberof messages.entry
             * @interface IInfoEntryCreated
             * @property {messages.entry.InfoEntryCreated.IPayload|null} [payload] InfoEntryCreated payload
             */

            /**
             * Constructs a new InfoEntryCreated.
             * @memberof messages.entry
             * @classdesc Represents an InfoEntryCreated.
             * @implements IInfoEntryCreated
             * @constructor
             * @param {messages.entry.IInfoEntryCreated=} [properties] Properties to set
             */
            function InfoEntryCreated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryCreated payload.
             * @member {messages.entry.InfoEntryCreated.IPayload|null|undefined} payload
             * @memberof messages.entry.InfoEntryCreated
             * @instance
             */
            InfoEntryCreated.prototype.payload = null;

            /**
             * Creates a new InfoEntryCreated instance using the specified properties.
             * @function create
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {messages.entry.IInfoEntryCreated=} [properties] Properties to set
             * @returns {messages.entry.InfoEntryCreated} InfoEntryCreated instance
             */
            InfoEntryCreated.create = function create(properties) {
                return new InfoEntryCreated(properties);
            };

            /**
             * Encodes the specified InfoEntryCreated message. Does not implicitly {@link messages.entry.InfoEntryCreated.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {messages.entry.IInfoEntryCreated} message InfoEntryCreated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryCreated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.InfoEntryCreated.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryCreated message, length delimited. Does not implicitly {@link messages.entry.InfoEntryCreated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {messages.entry.IInfoEntryCreated} message InfoEntryCreated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryCreated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.InfoEntryCreated} InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryCreated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntryCreated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.InfoEntryCreated.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.InfoEntryCreated} InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryCreated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryCreated message.
             * @function verify
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryCreated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.InfoEntryCreated.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryCreated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.InfoEntryCreated} InfoEntryCreated
             */
            InfoEntryCreated.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.InfoEntryCreated)
                    return object;
                var message = new $root.messages.entry.InfoEntryCreated();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.InfoEntryCreated.payload: object expected");
                    message.payload = $root.messages.entry.InfoEntryCreated.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryCreated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.InfoEntryCreated
             * @static
             * @param {messages.entry.InfoEntryCreated} message InfoEntryCreated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryCreated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = null;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.InfoEntryCreated.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryCreated to JSON.
             * @function toJSON
             * @memberof messages.entry.InfoEntryCreated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryCreated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryCreated.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.InfoEntryCreated
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.InfoEntryCreated
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.InfoEntryCreated.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryCreated.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.InfoEntryCreated.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryCreated.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryCreated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryCreated.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryCreated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.InfoEntryCreated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntryCreated.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.InfoEntryCreated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.InfoEntryCreated.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.InfoEntryCreated.Payload)
                        return object;
                    var message = new $root.messages.entry.InfoEntryCreated.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryCreated.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.InfoEntryCreated.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryCreated;
        })();

        entry.InfoEntryUpdated = (function() {

            /**
             * Properties of an InfoEntryUpdated.
             * @memberof messages.entry
             * @interface IInfoEntryUpdated
             * @property {messages.entry.InfoEntryUpdated.IPayload|null} [payload] InfoEntryUpdated payload
             */

            /**
             * Constructs a new InfoEntryUpdated.
             * @memberof messages.entry
             * @classdesc Represents an InfoEntryUpdated.
             * @implements IInfoEntryUpdated
             * @constructor
             * @param {messages.entry.IInfoEntryUpdated=} [properties] Properties to set
             */
            function InfoEntryUpdated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryUpdated payload.
             * @member {messages.entry.InfoEntryUpdated.IPayload|null|undefined} payload
             * @memberof messages.entry.InfoEntryUpdated
             * @instance
             */
            InfoEntryUpdated.prototype.payload = null;

            /**
             * Creates a new InfoEntryUpdated instance using the specified properties.
             * @function create
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {messages.entry.IInfoEntryUpdated=} [properties] Properties to set
             * @returns {messages.entry.InfoEntryUpdated} InfoEntryUpdated instance
             */
            InfoEntryUpdated.create = function create(properties) {
                return new InfoEntryUpdated(properties);
            };

            /**
             * Encodes the specified InfoEntryUpdated message. Does not implicitly {@link messages.entry.InfoEntryUpdated.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {messages.entry.IInfoEntryUpdated} message InfoEntryUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.InfoEntryUpdated.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryUpdated message, length delimited. Does not implicitly {@link messages.entry.InfoEntryUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {messages.entry.IInfoEntryUpdated} message InfoEntryUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.InfoEntryUpdated} InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntryUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.InfoEntryUpdated.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.InfoEntryUpdated} InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryUpdated message.
             * @function verify
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.InfoEntryUpdated.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.InfoEntryUpdated} InfoEntryUpdated
             */
            InfoEntryUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.InfoEntryUpdated)
                    return object;
                var message = new $root.messages.entry.InfoEntryUpdated();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.InfoEntryUpdated.payload: object expected");
                    message.payload = $root.messages.entry.InfoEntryUpdated.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.InfoEntryUpdated
             * @static
             * @param {messages.entry.InfoEntryUpdated} message InfoEntryUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = null;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.InfoEntryUpdated.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryUpdated to JSON.
             * @function toJSON
             * @memberof messages.entry.InfoEntryUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryUpdated.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.InfoEntryUpdated
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.InfoEntryUpdated
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.InfoEntryUpdated.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryUpdated.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.InfoEntryUpdated.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryUpdated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryUpdated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.InfoEntryUpdated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntryUpdated.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.InfoEntryUpdated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.InfoEntryUpdated.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.InfoEntryUpdated.Payload)
                        return object;
                    var message = new $root.messages.entry.InfoEntryUpdated.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.entry.InfoEntryUpdated.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.entry.InfoEntryUpdated.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.entry.InfoEntryUpdated.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.InfoEntryUpdated.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryUpdated;
        })();

        entry.InfoEntryDeleted = (function() {

            /**
             * Properties of an InfoEntryDeleted.
             * @memberof messages.entry
             * @interface IInfoEntryDeleted
             * @property {messages.entry.InfoEntryDeleted.IPayload|null} [payload] InfoEntryDeleted payload
             */

            /**
             * Constructs a new InfoEntryDeleted.
             * @memberof messages.entry
             * @classdesc Represents an InfoEntryDeleted.
             * @implements IInfoEntryDeleted
             * @constructor
             * @param {messages.entry.IInfoEntryDeleted=} [properties] Properties to set
             */
            function InfoEntryDeleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryDeleted payload.
             * @member {messages.entry.InfoEntryDeleted.IPayload|null|undefined} payload
             * @memberof messages.entry.InfoEntryDeleted
             * @instance
             */
            InfoEntryDeleted.prototype.payload = null;

            /**
             * Creates a new InfoEntryDeleted instance using the specified properties.
             * @function create
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {messages.entry.IInfoEntryDeleted=} [properties] Properties to set
             * @returns {messages.entry.InfoEntryDeleted} InfoEntryDeleted instance
             */
            InfoEntryDeleted.create = function create(properties) {
                return new InfoEntryDeleted(properties);
            };

            /**
             * Encodes the specified InfoEntryDeleted message. Does not implicitly {@link messages.entry.InfoEntryDeleted.verify|verify} messages.
             * @function encode
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {messages.entry.IInfoEntryDeleted} message InfoEntryDeleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryDeleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.entry.InfoEntryDeleted.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryDeleted message, length delimited. Does not implicitly {@link messages.entry.InfoEntryDeleted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {messages.entry.IInfoEntryDeleted} message InfoEntryDeleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryDeleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer.
             * @function decode
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.entry.InfoEntryDeleted} InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryDeleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntryDeleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.entry.InfoEntryDeleted.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.entry.InfoEntryDeleted} InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryDeleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryDeleted message.
             * @function verify
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryDeleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.entry.InfoEntryDeleted.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryDeleted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.entry.InfoEntryDeleted} InfoEntryDeleted
             */
            InfoEntryDeleted.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.entry.InfoEntryDeleted)
                    return object;
                var message = new $root.messages.entry.InfoEntryDeleted();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.entry.InfoEntryDeleted.payload: object expected");
                    message.payload = $root.messages.entry.InfoEntryDeleted.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryDeleted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.entry.InfoEntryDeleted
             * @static
             * @param {messages.entry.InfoEntryDeleted} message InfoEntryDeleted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryDeleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = null;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.entry.InfoEntryDeleted.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryDeleted to JSON.
             * @function toJSON
             * @memberof messages.entry.InfoEntryDeleted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryDeleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryDeleted.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.entry.InfoEntryDeleted
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.entry.InfoEntryDeleted
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.entry.InfoEntryDeleted.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.entry.InfoEntryDeleted.IPayload=} [properties] Properties to set
                 * @returns {messages.entry.InfoEntryDeleted.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.entry.InfoEntryDeleted.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.entry.InfoEntryDeleted.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.entry.InfoEntryDeleted.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.entry.InfoEntryDeleted.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.entry.InfoEntryDeleted.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.entry.InfoEntryDeleted.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.entry.InfoEntryDeleted.Payload)
                        return object;
                    var message = new $root.messages.entry.InfoEntryDeleted.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.entry.InfoEntryDeleted.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.entry.InfoEntryDeleted.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryDeleted;
        })();

        return entry;
    })();

    messages.insights = (function() {

        /**
         * Namespace insights.
         * @memberof messages
         * @namespace
         */
        var insights = {};

        insights.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof messages.insights
             * @interface IError
             * @property {messages.insights.Error.Code|null} [code] Error code
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof messages.insights
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {messages.insights.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {messages.insights.Error.Code} code
             * @memberof messages.insights.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error message.
             * @member {string} message
             * @memberof messages.insights.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof messages.insights.Error
             * @static
             * @param {messages.insights.IError=} [properties] Properties to set
             * @returns {messages.insights.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.insights.Error.verify|verify} messages.
             * @function encode
             * @memberof messages.insights.Error
             * @static
             * @param {messages.insights.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.insights.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.insights.Error
             * @static
             * @param {messages.insights.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof messages.insights.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.insights.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.insights.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.insights.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof messages.insights.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.insights.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.insights.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.insights.Error)
                    return object;
                var message = new $root.messages.insights.Error();
                switch (object.code) {
                case "UNKNOWN":
                case 0:
                    message.code = 0;
                    break;
                case "NOT_FOUND":
                case 1:
                    message.code = 1;
                    break;
                case "VALIDATION_FAILED":
                case 2:
                    message.code = 2;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.insights.Error
             * @static
             * @param {messages.insights.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.messages.insights.Error.Code[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof messages.insights.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Code enum.
             * @name messages.insights.Error.Code
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} NOT_FOUND=1 NOT_FOUND value
             * @property {number} VALIDATION_FAILED=2 VALIDATION_FAILED value
             */
            Error.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "NOT_FOUND"] = 1;
                values[valuesById[2] = "VALIDATION_FAILED"] = 2;
                return values;
            })();

            return Error;
        })();

        insights.Principal = (function() {

            /**
             * Properties of a Principal.
             * @memberof messages.insights
             * @interface IPrincipal
             * @property {messages.insights.Principal.Type|null} [type] Principal type
             * @property {string|null} [id] Principal id
             */

            /**
             * Constructs a new Principal.
             * @memberof messages.insights
             * @classdesc Represents a Principal.
             * @implements IPrincipal
             * @constructor
             * @param {messages.insights.IPrincipal=} [properties] Properties to set
             */
            function Principal(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Principal type.
             * @member {messages.insights.Principal.Type} type
             * @memberof messages.insights.Principal
             * @instance
             */
            Principal.prototype.type = 0;

            /**
             * Principal id.
             * @member {string} id
             * @memberof messages.insights.Principal
             * @instance
             */
            Principal.prototype.id = "";

            /**
             * Creates a new Principal instance using the specified properties.
             * @function create
             * @memberof messages.insights.Principal
             * @static
             * @param {messages.insights.IPrincipal=} [properties] Properties to set
             * @returns {messages.insights.Principal} Principal instance
             */
            Principal.create = function create(properties) {
                return new Principal(properties);
            };

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.insights.Principal.verify|verify} messages.
             * @function encode
             * @memberof messages.insights.Principal
             * @static
             * @param {messages.insights.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.insights.Principal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.insights.Principal
             * @static
             * @param {messages.insights.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @function decode
             * @memberof messages.insights.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.insights.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.Principal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.insights.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.insights.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Principal message.
             * @function verify
             * @memberof messages.insights.Principal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Principal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Principal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.insights.Principal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.insights.Principal} Principal
             */
            Principal.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.insights.Principal)
                    return object;
                var message = new $root.messages.insights.Principal();
                switch (object.type) {
                case "USER":
                case 0:
                    message.type = 0;
                    break;
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.insights.Principal
             * @static
             * @param {messages.insights.Principal} message Principal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Principal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "USER" : 0;
                    object.id = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.messages.insights.Principal.Type[message.type] : message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Principal to JSON.
             * @function toJSON
             * @memberof messages.insights.Principal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Principal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name messages.insights.Principal.Type
             * @enum {string}
             * @property {number} USER=0 USER value
             */
            Principal.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER"] = 0;
                return values;
            })();

            return Principal;
        })();

        insights.RequestContext = (function() {

            /**
             * Properties of a RequestContext.
             * @memberof messages.insights
             * @interface IRequestContext
             * @property {string|null} [traceId] RequestContext traceId
             * @property {messages.insights.IPrincipal|null} [principal] RequestContext principal
             */

            /**
             * Constructs a new RequestContext.
             * @memberof messages.insights
             * @classdesc Represents a RequestContext.
             * @implements IRequestContext
             * @constructor
             * @param {messages.insights.IRequestContext=} [properties] Properties to set
             */
            function RequestContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestContext traceId.
             * @member {string} traceId
             * @memberof messages.insights.RequestContext
             * @instance
             */
            RequestContext.prototype.traceId = "";

            /**
             * RequestContext principal.
             * @member {messages.insights.IPrincipal|null|undefined} principal
             * @memberof messages.insights.RequestContext
             * @instance
             */
            RequestContext.prototype.principal = null;

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @function create
             * @memberof messages.insights.RequestContext
             * @static
             * @param {messages.insights.IRequestContext=} [properties] Properties to set
             * @returns {messages.insights.RequestContext} RequestContext instance
             */
            RequestContext.create = function create(properties) {
                return new RequestContext(properties);
            };

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.insights.RequestContext.verify|verify} messages.
             * @function encode
             * @memberof messages.insights.RequestContext
             * @static
             * @param {messages.insights.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceId);
                if (message.principal != null && message.hasOwnProperty("principal"))
                    $root.messages.insights.Principal.encode(message.principal, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.insights.RequestContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.insights.RequestContext
             * @static
             * @param {messages.insights.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.insights.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.insights.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.RequestContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.traceId = reader.string();
                        break;
                    case 3:
                        message.principal = $root.messages.insights.Principal.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.insights.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.insights.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestContext message.
             * @function verify
             * @memberof messages.insights.RequestContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.principal != null && message.hasOwnProperty("principal")) {
                    var error = $root.messages.insights.Principal.verify(message.principal);
                    if (error)
                        return "principal." + error;
                }
                return null;
            };

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.insights.RequestContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.insights.RequestContext} RequestContext
             */
            RequestContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.insights.RequestContext)
                    return object;
                var message = new $root.messages.insights.RequestContext();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.principal != null) {
                    if (typeof object.principal !== "object")
                        throw TypeError(".messages.insights.RequestContext.principal: object expected");
                    message.principal = $root.messages.insights.Principal.fromObject(object.principal);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.insights.RequestContext
             * @static
             * @param {messages.insights.RequestContext} message RequestContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.principal = null;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.principal != null && message.hasOwnProperty("principal"))
                    object.principal = $root.messages.insights.Principal.toObject(message.principal, options);
                return object;
            };

            /**
             * Converts this RequestContext to JSON.
             * @function toJSON
             * @memberof messages.insights.RequestContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestContext;
        })();

        insights.IncrementDailyCounter = (function() {

            /**
             * Properties of an IncrementDailyCounter.
             * @memberof messages.insights
             * @interface IIncrementDailyCounter
             * @property {messages.insights.IRequestContext|null} [context] IncrementDailyCounter context
             * @property {messages.insights.IncrementDailyCounter.IPayload|null} [payload] IncrementDailyCounter payload
             */

            /**
             * Constructs a new IncrementDailyCounter.
             * @memberof messages.insights
             * @classdesc Represents an IncrementDailyCounter.
             * @implements IIncrementDailyCounter
             * @constructor
             * @param {messages.insights.IIncrementDailyCounter=} [properties] Properties to set
             */
            function IncrementDailyCounter(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IncrementDailyCounter context.
             * @member {messages.insights.IRequestContext|null|undefined} context
             * @memberof messages.insights.IncrementDailyCounter
             * @instance
             */
            IncrementDailyCounter.prototype.context = null;

            /**
             * IncrementDailyCounter payload.
             * @member {messages.insights.IncrementDailyCounter.IPayload|null|undefined} payload
             * @memberof messages.insights.IncrementDailyCounter
             * @instance
             */
            IncrementDailyCounter.prototype.payload = null;

            /**
             * Creates a new IncrementDailyCounter instance using the specified properties.
             * @function create
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {messages.insights.IIncrementDailyCounter=} [properties] Properties to set
             * @returns {messages.insights.IncrementDailyCounter} IncrementDailyCounter instance
             */
            IncrementDailyCounter.create = function create(properties) {
                return new IncrementDailyCounter(properties);
            };

            /**
             * Encodes the specified IncrementDailyCounter message. Does not implicitly {@link messages.insights.IncrementDailyCounter.verify|verify} messages.
             * @function encode
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {messages.insights.IIncrementDailyCounter} message IncrementDailyCounter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IncrementDailyCounter.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.insights.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.insights.IncrementDailyCounter.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IncrementDailyCounter message, length delimited. Does not implicitly {@link messages.insights.IncrementDailyCounter.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {messages.insights.IIncrementDailyCounter} message IncrementDailyCounter message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IncrementDailyCounter.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IncrementDailyCounter message from the specified reader or buffer.
             * @function decode
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.insights.IncrementDailyCounter} IncrementDailyCounter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IncrementDailyCounter.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.IncrementDailyCounter();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.insights.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.insights.IncrementDailyCounter.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IncrementDailyCounter message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.insights.IncrementDailyCounter} IncrementDailyCounter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IncrementDailyCounter.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IncrementDailyCounter message.
             * @function verify
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IncrementDailyCounter.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.insights.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.insights.IncrementDailyCounter.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an IncrementDailyCounter message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.insights.IncrementDailyCounter} IncrementDailyCounter
             */
            IncrementDailyCounter.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.insights.IncrementDailyCounter)
                    return object;
                var message = new $root.messages.insights.IncrementDailyCounter();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.insights.IncrementDailyCounter.context: object expected");
                    message.context = $root.messages.insights.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.insights.IncrementDailyCounter.payload: object expected");
                    message.payload = $root.messages.insights.IncrementDailyCounter.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an IncrementDailyCounter message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.insights.IncrementDailyCounter
             * @static
             * @param {messages.insights.IncrementDailyCounter} message IncrementDailyCounter
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IncrementDailyCounter.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.insights.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.insights.IncrementDailyCounter.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this IncrementDailyCounter to JSON.
             * @function toJSON
             * @memberof messages.insights.IncrementDailyCounter
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IncrementDailyCounter.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            IncrementDailyCounter.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.insights.IncrementDailyCounter
                 * @interface IPayload
                 * @property {google.protobuf.ITimestamp|null} [day] Payload day
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.insights.IncrementDailyCounter
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.insights.IncrementDailyCounter.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload day.
                 * @member {google.protobuf.ITimestamp|null|undefined} day
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @instance
                 */
                Payload.prototype.day = null;

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {messages.insights.IncrementDailyCounter.IPayload=} [properties] Properties to set
                 * @returns {messages.insights.IncrementDailyCounter.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.insights.IncrementDailyCounter.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {messages.insights.IncrementDailyCounter.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.day != null && message.hasOwnProperty("day"))
                        $root.google.protobuf.Timestamp.encode(message.day, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.insights.IncrementDailyCounter.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {messages.insights.IncrementDailyCounter.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.insights.IncrementDailyCounter.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.IncrementDailyCounter.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.day = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.insights.IncrementDailyCounter.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.day != null && message.hasOwnProperty("day")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.day);
                        if (error)
                            return "day." + error;
                    }
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.insights.IncrementDailyCounter.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.insights.IncrementDailyCounter.Payload)
                        return object;
                    var message = new $root.messages.insights.IncrementDailyCounter.Payload();
                    if (object.day != null) {
                        if (typeof object.day !== "object")
                            throw TypeError(".messages.insights.IncrementDailyCounter.Payload.day: object expected");
                        message.day = $root.google.protobuf.Timestamp.fromObject(object.day);
                    }
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @static
                 * @param {messages.insights.IncrementDailyCounter.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.day = null;
                        object.creatorId = "";
                    }
                    if (message.day != null && message.hasOwnProperty("day"))
                        object.day = $root.google.protobuf.Timestamp.toObject(message.day, options);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.insights.IncrementDailyCounter.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return IncrementDailyCounter;
        })();

        insights.GetVelocityRequest = (function() {

            /**
             * Properties of a GetVelocityRequest.
             * @memberof messages.insights
             * @interface IGetVelocityRequest
             * @property {messages.insights.IRequestContext|null} [context] GetVelocityRequest context
             * @property {messages.insights.GetVelocityRequest.IPayload|null} [payload] GetVelocityRequest payload
             */

            /**
             * Constructs a new GetVelocityRequest.
             * @memberof messages.insights
             * @classdesc Represents a GetVelocityRequest.
             * @implements IGetVelocityRequest
             * @constructor
             * @param {messages.insights.IGetVelocityRequest=} [properties] Properties to set
             */
            function GetVelocityRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetVelocityRequest context.
             * @member {messages.insights.IRequestContext|null|undefined} context
             * @memberof messages.insights.GetVelocityRequest
             * @instance
             */
            GetVelocityRequest.prototype.context = null;

            /**
             * GetVelocityRequest payload.
             * @member {messages.insights.GetVelocityRequest.IPayload|null|undefined} payload
             * @memberof messages.insights.GetVelocityRequest
             * @instance
             */
            GetVelocityRequest.prototype.payload = null;

            /**
             * Creates a new GetVelocityRequest instance using the specified properties.
             * @function create
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {messages.insights.IGetVelocityRequest=} [properties] Properties to set
             * @returns {messages.insights.GetVelocityRequest} GetVelocityRequest instance
             */
            GetVelocityRequest.create = function create(properties) {
                return new GetVelocityRequest(properties);
            };

            /**
             * Encodes the specified GetVelocityRequest message. Does not implicitly {@link messages.insights.GetVelocityRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {messages.insights.IGetVelocityRequest} message GetVelocityRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetVelocityRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.insights.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.insights.GetVelocityRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetVelocityRequest message, length delimited. Does not implicitly {@link messages.insights.GetVelocityRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {messages.insights.IGetVelocityRequest} message GetVelocityRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetVelocityRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetVelocityRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.insights.GetVelocityRequest} GetVelocityRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetVelocityRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.GetVelocityRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.insights.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.insights.GetVelocityRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetVelocityRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.insights.GetVelocityRequest} GetVelocityRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetVelocityRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetVelocityRequest message.
             * @function verify
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetVelocityRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.insights.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.insights.GetVelocityRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a GetVelocityRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.insights.GetVelocityRequest} GetVelocityRequest
             */
            GetVelocityRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.insights.GetVelocityRequest)
                    return object;
                var message = new $root.messages.insights.GetVelocityRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.insights.GetVelocityRequest.context: object expected");
                    message.context = $root.messages.insights.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.insights.GetVelocityRequest.payload: object expected");
                    message.payload = $root.messages.insights.GetVelocityRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetVelocityRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.insights.GetVelocityRequest
             * @static
             * @param {messages.insights.GetVelocityRequest} message GetVelocityRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetVelocityRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.insights.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.insights.GetVelocityRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this GetVelocityRequest to JSON.
             * @function toJSON
             * @memberof messages.insights.GetVelocityRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetVelocityRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetVelocityRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.insights.GetVelocityRequest
                 * @interface IPayload
                 * @property {google.protobuf.ITimestamp|null} [start] Payload start
                 * @property {google.protobuf.ITimestamp|null} [end] Payload end
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.insights.GetVelocityRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.insights.GetVelocityRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload start.
                 * @member {google.protobuf.ITimestamp|null|undefined} start
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @instance
                 */
                Payload.prototype.start = null;

                /**
                 * Payload end.
                 * @member {google.protobuf.ITimestamp|null|undefined} end
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @instance
                 */
                Payload.prototype.end = null;

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {messages.insights.GetVelocityRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.insights.GetVelocityRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.insights.GetVelocityRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {messages.insights.GetVelocityRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        $root.google.protobuf.Timestamp.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.end != null && message.hasOwnProperty("end"))
                        $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.insights.GetVelocityRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {messages.insights.GetVelocityRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.insights.GetVelocityRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.GetVelocityRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.insights.GetVelocityRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.start);
                        if (error)
                            return "start." + error;
                    }
                    if (message.end != null && message.hasOwnProperty("end")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.end);
                        if (error)
                            return "end." + error;
                    }
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.insights.GetVelocityRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.insights.GetVelocityRequest.Payload)
                        return object;
                    var message = new $root.messages.insights.GetVelocityRequest.Payload();
                    if (object.start != null) {
                        if (typeof object.start !== "object")
                            throw TypeError(".messages.insights.GetVelocityRequest.Payload.start: object expected");
                        message.start = $root.google.protobuf.Timestamp.fromObject(object.start);
                    }
                    if (object.end != null) {
                        if (typeof object.end !== "object")
                            throw TypeError(".messages.insights.GetVelocityRequest.Payload.end: object expected");
                        message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
                    }
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @static
                 * @param {messages.insights.GetVelocityRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = null;
                        object.end = null;
                        object.creatorId = "";
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = $root.google.protobuf.Timestamp.toObject(message.start, options);
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.insights.GetVelocityRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return GetVelocityRequest;
        })();

        insights.GetVelocityResponse = (function() {

            /**
             * Properties of a GetVelocityResponse.
             * @memberof messages.insights
             * @interface IGetVelocityResponse
             * @property {Array.<messages.insights.GetVelocityResponse.IDailyVelocity>|null} [payload] GetVelocityResponse payload
             * @property {messages.insights.IError|null} [error] GetVelocityResponse error
             */

            /**
             * Constructs a new GetVelocityResponse.
             * @memberof messages.insights
             * @classdesc Represents a GetVelocityResponse.
             * @implements IGetVelocityResponse
             * @constructor
             * @param {messages.insights.IGetVelocityResponse=} [properties] Properties to set
             */
            function GetVelocityResponse(properties) {
                this.payload = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetVelocityResponse payload.
             * @member {Array.<messages.insights.GetVelocityResponse.IDailyVelocity>} payload
             * @memberof messages.insights.GetVelocityResponse
             * @instance
             */
            GetVelocityResponse.prototype.payload = $util.emptyArray;

            /**
             * GetVelocityResponse error.
             * @member {messages.insights.IError|null|undefined} error
             * @memberof messages.insights.GetVelocityResponse
             * @instance
             */
            GetVelocityResponse.prototype.error = null;

            /**
             * Creates a new GetVelocityResponse instance using the specified properties.
             * @function create
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {messages.insights.IGetVelocityResponse=} [properties] Properties to set
             * @returns {messages.insights.GetVelocityResponse} GetVelocityResponse instance
             */
            GetVelocityResponse.create = function create(properties) {
                return new GetVelocityResponse(properties);
            };

            /**
             * Encodes the specified GetVelocityResponse message. Does not implicitly {@link messages.insights.GetVelocityResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {messages.insights.IGetVelocityResponse} message GetVelocityResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetVelocityResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.payload.length)
                    for (var i = 0; i < message.payload.length; ++i)
                        $root.messages.insights.GetVelocityResponse.DailyVelocity.encode(message.payload[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.insights.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetVelocityResponse message, length delimited. Does not implicitly {@link messages.insights.GetVelocityResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {messages.insights.IGetVelocityResponse} message GetVelocityResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetVelocityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetVelocityResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.insights.GetVelocityResponse} GetVelocityResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetVelocityResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.GetVelocityResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.payload && message.payload.length))
                            message.payload = [];
                        message.payload.push($root.messages.insights.GetVelocityResponse.DailyVelocity.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.error = $root.messages.insights.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetVelocityResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.insights.GetVelocityResponse} GetVelocityResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetVelocityResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetVelocityResponse message.
             * @function verify
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetVelocityResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    if (!Array.isArray(message.payload))
                        return "payload: array expected";
                    for (var i = 0; i < message.payload.length; ++i) {
                        var error = $root.messages.insights.GetVelocityResponse.DailyVelocity.verify(message.payload[i]);
                        if (error)
                            return "payload." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.insights.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };

            /**
             * Creates a GetVelocityResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.insights.GetVelocityResponse} GetVelocityResponse
             */
            GetVelocityResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.insights.GetVelocityResponse)
                    return object;
                var message = new $root.messages.insights.GetVelocityResponse();
                if (object.payload) {
                    if (!Array.isArray(object.payload))
                        throw TypeError(".messages.insights.GetVelocityResponse.payload: array expected");
                    message.payload = [];
                    for (var i = 0; i < object.payload.length; ++i) {
                        if (typeof object.payload[i] !== "object")
                            throw TypeError(".messages.insights.GetVelocityResponse.payload: object expected");
                        message.payload[i] = $root.messages.insights.GetVelocityResponse.DailyVelocity.fromObject(object.payload[i]);
                    }
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.insights.GetVelocityResponse.error: object expected");
                    message.error = $root.messages.insights.Error.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetVelocityResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.insights.GetVelocityResponse
             * @static
             * @param {messages.insights.GetVelocityResponse} message GetVelocityResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetVelocityResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.payload = [];
                if (options.defaults)
                    object.error = null;
                if (message.payload && message.payload.length) {
                    object.payload = [];
                    for (var j = 0; j < message.payload.length; ++j)
                        object.payload[j] = $root.messages.insights.GetVelocityResponse.DailyVelocity.toObject(message.payload[j], options);
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.insights.Error.toObject(message.error, options);
                return object;
            };

            /**
             * Converts this GetVelocityResponse to JSON.
             * @function toJSON
             * @memberof messages.insights.GetVelocityResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetVelocityResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetVelocityResponse.DailyVelocity = (function() {

                /**
                 * Properties of a DailyVelocity.
                 * @memberof messages.insights.GetVelocityResponse
                 * @interface IDailyVelocity
                 * @property {google.protobuf.ITimestamp|null} [day] DailyVelocity day
                 * @property {number|null} [score] DailyVelocity score
                 */

                /**
                 * Constructs a new DailyVelocity.
                 * @memberof messages.insights.GetVelocityResponse
                 * @classdesc Represents a DailyVelocity.
                 * @implements IDailyVelocity
                 * @constructor
                 * @param {messages.insights.GetVelocityResponse.IDailyVelocity=} [properties] Properties to set
                 */
                function DailyVelocity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DailyVelocity day.
                 * @member {google.protobuf.ITimestamp|null|undefined} day
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @instance
                 */
                DailyVelocity.prototype.day = null;

                /**
                 * DailyVelocity score.
                 * @member {number} score
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @instance
                 */
                DailyVelocity.prototype.score = 0;

                /**
                 * Creates a new DailyVelocity instance using the specified properties.
                 * @function create
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {messages.insights.GetVelocityResponse.IDailyVelocity=} [properties] Properties to set
                 * @returns {messages.insights.GetVelocityResponse.DailyVelocity} DailyVelocity instance
                 */
                DailyVelocity.create = function create(properties) {
                    return new DailyVelocity(properties);
                };

                /**
                 * Encodes the specified DailyVelocity message. Does not implicitly {@link messages.insights.GetVelocityResponse.DailyVelocity.verify|verify} messages.
                 * @function encode
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {messages.insights.GetVelocityResponse.IDailyVelocity} message DailyVelocity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DailyVelocity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.day != null && message.hasOwnProperty("day"))
                        $root.google.protobuf.Timestamp.encode(message.day, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.score != null && message.hasOwnProperty("score"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
                    return writer;
                };

                /**
                 * Encodes the specified DailyVelocity message, length delimited. Does not implicitly {@link messages.insights.GetVelocityResponse.DailyVelocity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {messages.insights.GetVelocityResponse.IDailyVelocity} message DailyVelocity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DailyVelocity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DailyVelocity message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.insights.GetVelocityResponse.DailyVelocity} DailyVelocity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DailyVelocity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.insights.GetVelocityResponse.DailyVelocity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.day = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.score = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DailyVelocity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.insights.GetVelocityResponse.DailyVelocity} DailyVelocity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DailyVelocity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DailyVelocity message.
                 * @function verify
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DailyVelocity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.day != null && message.hasOwnProperty("day")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.day);
                        if (error)
                            return "day." + error;
                    }
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (!$util.isInteger(message.score))
                            return "score: integer expected";
                    return null;
                };

                /**
                 * Creates a DailyVelocity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.insights.GetVelocityResponse.DailyVelocity} DailyVelocity
                 */
                DailyVelocity.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.insights.GetVelocityResponse.DailyVelocity)
                        return object;
                    var message = new $root.messages.insights.GetVelocityResponse.DailyVelocity();
                    if (object.day != null) {
                        if (typeof object.day !== "object")
                            throw TypeError(".messages.insights.GetVelocityResponse.DailyVelocity.day: object expected");
                        message.day = $root.google.protobuf.Timestamp.fromObject(object.day);
                    }
                    if (object.score != null)
                        message.score = object.score | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a DailyVelocity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @static
                 * @param {messages.insights.GetVelocityResponse.DailyVelocity} message DailyVelocity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DailyVelocity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.day = null;
                        object.score = 0;
                    }
                    if (message.day != null && message.hasOwnProperty("day"))
                        object.day = $root.google.protobuf.Timestamp.toObject(message.day, options);
                    if (message.score != null && message.hasOwnProperty("score"))
                        object.score = message.score;
                    return object;
                };

                /**
                 * Converts this DailyVelocity to JSON.
                 * @function toJSON
                 * @memberof messages.insights.GetVelocityResponse.DailyVelocity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DailyVelocity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DailyVelocity;
            })();

            return GetVelocityResponse;
        })();

        return insights;
    })();

    messages.notebook = (function() {

        /**
         * Namespace notebook.
         * @memberof messages
         * @namespace
         */
        var notebook = {};

        notebook.NullableTimestamp = (function() {

            /**
             * Properties of a NullableTimestamp.
             * @memberof messages.notebook
             * @interface INullableTimestamp
             * @property {google.protobuf.NullValue|null} ["null"] NullableTimestamp null
             * @property {google.protobuf.ITimestamp|null} [timestamp] NullableTimestamp timestamp
             */

            /**
             * Constructs a new NullableTimestamp.
             * @memberof messages.notebook
             * @classdesc Represents a NullableTimestamp.
             * @implements INullableTimestamp
             * @constructor
             * @param {messages.notebook.INullableTimestamp=} [properties] Properties to set
             */
            function NullableTimestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NullableTimestamp null.
             * @member {google.protobuf.NullValue} null
             * @memberof messages.notebook.NullableTimestamp
             * @instance
             */
            NullableTimestamp.prototype["null"] = 0;

            /**
             * NullableTimestamp timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof messages.notebook.NullableTimestamp
             * @instance
             */
            NullableTimestamp.prototype.timestamp = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * NullableTimestamp value.
             * @member {"null"|"timestamp"|undefined} value
             * @memberof messages.notebook.NullableTimestamp
             * @instance
             */
            Object.defineProperty(NullableTimestamp.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["null", "timestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new NullableTimestamp instance using the specified properties.
             * @function create
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {messages.notebook.INullableTimestamp=} [properties] Properties to set
             * @returns {messages.notebook.NullableTimestamp} NullableTimestamp instance
             */
            NullableTimestamp.create = function create(properties) {
                return new NullableTimestamp(properties);
            };

            /**
             * Encodes the specified NullableTimestamp message. Does not implicitly {@link messages.notebook.NullableTimestamp.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {messages.notebook.INullableTimestamp} message NullableTimestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NullableTimestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["null"] != null && message.hasOwnProperty("null"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message["null"]);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NullableTimestamp message, length delimited. Does not implicitly {@link messages.notebook.NullableTimestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {messages.notebook.INullableTimestamp} message NullableTimestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NullableTimestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NullableTimestamp message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.NullableTimestamp} NullableTimestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NullableTimestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.NullableTimestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message["null"] = reader.int32();
                        break;
                    case 2:
                        message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NullableTimestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.NullableTimestamp} NullableTimestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NullableTimestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NullableTimestamp message.
             * @function verify
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NullableTimestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message["null"] != null && message.hasOwnProperty("null")) {
                    properties.value = 1;
                    switch (message["null"]) {
                    default:
                        return "null: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    {
                        var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                        if (error)
                            return "timestamp." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a NullableTimestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.NullableTimestamp} NullableTimestamp
             */
            NullableTimestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.NullableTimestamp)
                    return object;
                var message = new $root.messages.notebook.NullableTimestamp();
                switch (object["null"]) {
                case "NULL_VALUE":
                case 0:
                    message["null"] = 0;
                    break;
                }
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".messages.notebook.NullableTimestamp.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                return message;
            };

            /**
             * Creates a plain object from a NullableTimestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.NullableTimestamp
             * @static
             * @param {messages.notebook.NullableTimestamp} message NullableTimestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NullableTimestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message["null"] != null && message.hasOwnProperty("null")) {
                    object["null"] = options.enums === String ? $root.google.protobuf.NullValue[message["null"]] : message["null"];
                    if (options.oneofs)
                        object.value = "null";
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                    if (options.oneofs)
                        object.value = "timestamp";
                }
                return object;
            };

            /**
             * Converts this NullableTimestamp to JSON.
             * @function toJSON
             * @memberof messages.notebook.NullableTimestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NullableTimestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NullableTimestamp;
        })();

        notebook.Principal = (function() {

            /**
             * Properties of a Principal.
             * @memberof messages.notebook
             * @interface IPrincipal
             * @property {messages.notebook.Principal.Type|null} [type] Principal type
             * @property {string|null} [id] Principal id
             */

            /**
             * Constructs a new Principal.
             * @memberof messages.notebook
             * @classdesc Represents a Principal.
             * @implements IPrincipal
             * @constructor
             * @param {messages.notebook.IPrincipal=} [properties] Properties to set
             */
            function Principal(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Principal type.
             * @member {messages.notebook.Principal.Type} type
             * @memberof messages.notebook.Principal
             * @instance
             */
            Principal.prototype.type = 0;

            /**
             * Principal id.
             * @member {string} id
             * @memberof messages.notebook.Principal
             * @instance
             */
            Principal.prototype.id = "";

            /**
             * Creates a new Principal instance using the specified properties.
             * @function create
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.IPrincipal=} [properties] Properties to set
             * @returns {messages.notebook.Principal} Principal instance
             */
            Principal.create = function create(properties) {
                return new Principal(properties);
            };

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.notebook.Principal.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.notebook.Principal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.Principal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Principal message.
             * @function verify
             * @memberof messages.notebook.Principal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Principal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Principal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.Principal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.Principal} Principal
             */
            Principal.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.Principal)
                    return object;
                var message = new $root.messages.notebook.Principal();
                switch (object.type) {
                case "USER":
                case 0:
                    message.type = 0;
                    break;
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.Principal} message Principal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Principal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "USER" : 0;
                    object.id = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.messages.notebook.Principal.Type[message.type] : message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Principal to JSON.
             * @function toJSON
             * @memberof messages.notebook.Principal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Principal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name messages.notebook.Principal.Type
             * @enum {string}
             * @property {number} USER=0 USER value
             */
            Principal.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER"] = 0;
                return values;
            })();

            return Principal;
        })();

        notebook.RequestContext = (function() {

            /**
             * Properties of a RequestContext.
             * @memberof messages.notebook
             * @interface IRequestContext
             * @property {string|null} [traceId] RequestContext traceId
             * @property {messages.notebook.IPrincipal|null} [principal] RequestContext principal
             * @property {string|null} [origin] RequestContext origin
             */

            /**
             * Constructs a new RequestContext.
             * @memberof messages.notebook
             * @classdesc Represents a RequestContext.
             * @implements IRequestContext
             * @constructor
             * @param {messages.notebook.IRequestContext=} [properties] Properties to set
             */
            function RequestContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestContext traceId.
             * @member {string} traceId
             * @memberof messages.notebook.RequestContext
             * @instance
             */
            RequestContext.prototype.traceId = "";

            /**
             * RequestContext principal.
             * @member {messages.notebook.IPrincipal|null|undefined} principal
             * @memberof messages.notebook.RequestContext
             * @instance
             */
            RequestContext.prototype.principal = null;

            /**
             * RequestContext origin.
             * @member {string} origin
             * @memberof messages.notebook.RequestContext
             * @instance
             */
            RequestContext.prototype.origin = "";

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @function create
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.IRequestContext=} [properties] Properties to set
             * @returns {messages.notebook.RequestContext} RequestContext instance
             */
            RequestContext.create = function create(properties) {
                return new RequestContext(properties);
            };

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.notebook.RequestContext.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traceId);
                if (message.principal != null && message.hasOwnProperty("principal"))
                    $root.messages.notebook.Principal.encode(message.principal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.origin != null && message.hasOwnProperty("origin"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.origin);
                return writer;
            };

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.notebook.RequestContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.RequestContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traceId = reader.string();
                        break;
                    case 2:
                        message.principal = $root.messages.notebook.Principal.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.origin = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestContext message.
             * @function verify
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.principal != null && message.hasOwnProperty("principal")) {
                    var error = $root.messages.notebook.Principal.verify(message.principal);
                    if (error)
                        return "principal." + error;
                }
                if (message.origin != null && message.hasOwnProperty("origin"))
                    if (!$util.isString(message.origin))
                        return "origin: string expected";
                return null;
            };

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.RequestContext} RequestContext
             */
            RequestContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.RequestContext)
                    return object;
                var message = new $root.messages.notebook.RequestContext();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.principal != null) {
                    if (typeof object.principal !== "object")
                        throw TypeError(".messages.notebook.RequestContext.principal: object expected");
                    message.principal = $root.messages.notebook.Principal.fromObject(object.principal);
                }
                if (object.origin != null)
                    message.origin = String(object.origin);
                return message;
            };

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.RequestContext} message RequestContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.principal = null;
                    object.origin = "";
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.principal != null && message.hasOwnProperty("principal"))
                    object.principal = $root.messages.notebook.Principal.toObject(message.principal, options);
                if (message.origin != null && message.hasOwnProperty("origin"))
                    object.origin = message.origin;
                return object;
            };

            /**
             * Converts this RequestContext to JSON.
             * @function toJSON
             * @memberof messages.notebook.RequestContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestContext;
        })();

        notebook.ResponseContext = (function() {

            /**
             * Properties of a ResponseContext.
             * @memberof messages.notebook
             * @interface IResponseContext
             * @property {string|null} [traceId] ResponseContext traceId
             * @property {string|null} [origin] ResponseContext origin
             */

            /**
             * Constructs a new ResponseContext.
             * @memberof messages.notebook
             * @classdesc Represents a ResponseContext.
             * @implements IResponseContext
             * @constructor
             * @param {messages.notebook.IResponseContext=} [properties] Properties to set
             */
            function ResponseContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseContext traceId.
             * @member {string} traceId
             * @memberof messages.notebook.ResponseContext
             * @instance
             */
            ResponseContext.prototype.traceId = "";

            /**
             * ResponseContext origin.
             * @member {string} origin
             * @memberof messages.notebook.ResponseContext
             * @instance
             */
            ResponseContext.prototype.origin = "";

            /**
             * Creates a new ResponseContext instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {messages.notebook.IResponseContext=} [properties] Properties to set
             * @returns {messages.notebook.ResponseContext} ResponseContext instance
             */
            ResponseContext.create = function create(properties) {
                return new ResponseContext(properties);
            };

            /**
             * Encodes the specified ResponseContext message. Does not implicitly {@link messages.notebook.ResponseContext.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {messages.notebook.IResponseContext} message ResponseContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traceId);
                if (message.origin != null && message.hasOwnProperty("origin"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.origin);
                return writer;
            };

            /**
             * Encodes the specified ResponseContext message, length delimited. Does not implicitly {@link messages.notebook.ResponseContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {messages.notebook.IResponseContext} message ResponseContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ResponseContext} ResponseContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ResponseContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traceId = reader.string();
                        break;
                    case 2:
                        message.origin = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ResponseContext} ResponseContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseContext message.
             * @function verify
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.origin != null && message.hasOwnProperty("origin"))
                    if (!$util.isString(message.origin))
                        return "origin: string expected";
                return null;
            };

            /**
             * Creates a ResponseContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ResponseContext} ResponseContext
             */
            ResponseContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ResponseContext)
                    return object;
                var message = new $root.messages.notebook.ResponseContext();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.origin != null)
                    message.origin = String(object.origin);
                return message;
            };

            /**
             * Creates a plain object from a ResponseContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ResponseContext
             * @static
             * @param {messages.notebook.ResponseContext} message ResponseContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.origin = "";
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.origin != null && message.hasOwnProperty("origin"))
                    object.origin = message.origin;
                return object;
            };

            /**
             * Converts this ResponseContext to JSON.
             * @function toJSON
             * @memberof messages.notebook.ResponseContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponseContext;
        })();

        notebook.InfoContext = (function() {

            /**
             * Properties of an InfoContext.
             * @memberof messages.notebook
             * @interface IInfoContext
             * @property {string|null} [traceId] InfoContext traceId
             * @property {string|null} [origin] InfoContext origin
             */

            /**
             * Constructs a new InfoContext.
             * @memberof messages.notebook
             * @classdesc Represents an InfoContext.
             * @implements IInfoContext
             * @constructor
             * @param {messages.notebook.IInfoContext=} [properties] Properties to set
             */
            function InfoContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoContext traceId.
             * @member {string} traceId
             * @memberof messages.notebook.InfoContext
             * @instance
             */
            InfoContext.prototype.traceId = "";

            /**
             * InfoContext origin.
             * @member {string} origin
             * @memberof messages.notebook.InfoContext
             * @instance
             */
            InfoContext.prototype.origin = "";

            /**
             * Creates a new InfoContext instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {messages.notebook.IInfoContext=} [properties] Properties to set
             * @returns {messages.notebook.InfoContext} InfoContext instance
             */
            InfoContext.create = function create(properties) {
                return new InfoContext(properties);
            };

            /**
             * Encodes the specified InfoContext message. Does not implicitly {@link messages.notebook.InfoContext.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {messages.notebook.IInfoContext} message InfoContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traceId);
                if (message.origin != null && message.hasOwnProperty("origin"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.origin);
                return writer;
            };

            /**
             * Encodes the specified InfoContext message, length delimited. Does not implicitly {@link messages.notebook.InfoContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {messages.notebook.IInfoContext} message InfoContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoContext} InfoContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traceId = reader.string();
                        break;
                    case 2:
                        message.origin = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoContext} InfoContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoContext message.
             * @function verify
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.origin != null && message.hasOwnProperty("origin"))
                    if (!$util.isString(message.origin))
                        return "origin: string expected";
                return null;
            };

            /**
             * Creates an InfoContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoContext} InfoContext
             */
            InfoContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoContext)
                    return object;
                var message = new $root.messages.notebook.InfoContext();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.origin != null)
                    message.origin = String(object.origin);
                return message;
            };

            /**
             * Creates a plain object from an InfoContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoContext
             * @static
             * @param {messages.notebook.InfoContext} message InfoContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.origin = "";
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.origin != null && message.hasOwnProperty("origin"))
                    object.origin = message.origin;
                return object;
            };

            /**
             * Converts this InfoContext to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InfoContext;
        })();

        notebook.ErrorResponse = (function() {

            /**
             * Properties of an ErrorResponse.
             * @memberof messages.notebook
             * @interface IErrorResponse
             * @property {google.rpc.IStatus|null} [status] ErrorResponse status
             * @property {messages.notebook.IResponseContext|null} [context] ErrorResponse context
             */

            /**
             * Constructs a new ErrorResponse.
             * @memberof messages.notebook
             * @classdesc Represents an ErrorResponse.
             * @implements IErrorResponse
             * @constructor
             * @param {messages.notebook.IErrorResponse=} [properties] Properties to set
             */
            function ErrorResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ErrorResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.ErrorResponse
             * @instance
             */
            ErrorResponse.prototype.status = null;

            /**
             * ErrorResponse context.
             * @member {messages.notebook.IResponseContext|null|undefined} context
             * @memberof messages.notebook.ErrorResponse
             * @instance
             */
            ErrorResponse.prototype.context = null;

            /**
             * Creates a new ErrorResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {messages.notebook.IErrorResponse=} [properties] Properties to set
             * @returns {messages.notebook.ErrorResponse} ErrorResponse instance
             */
            ErrorResponse.create = function create(properties) {
                return new ErrorResponse(properties);
            };

            /**
             * Encodes the specified ErrorResponse message. Does not implicitly {@link messages.notebook.ErrorResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {messages.notebook.IErrorResponse} message ErrorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.ResponseContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link messages.notebook.ErrorResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {messages.notebook.IErrorResponse} message ErrorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ErrorResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ErrorResponse} ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ErrorResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.context = $root.messages.notebook.ResponseContext.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ErrorResponse} ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ErrorResponse message.
             * @function verify
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ErrorResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.ResponseContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                return null;
            };

            /**
             * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ErrorResponse} ErrorResponse
             */
            ErrorResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ErrorResponse)
                    return object;
                var message = new $root.messages.notebook.ErrorResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.ErrorResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ErrorResponse.context: object expected");
                    message.context = $root.messages.notebook.ResponseContext.fromObject(object.context);
                }
                return message;
            };

            /**
             * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ErrorResponse
             * @static
             * @param {messages.notebook.ErrorResponse} message ErrorResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ErrorResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.context = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.ResponseContext.toObject(message.context, options);
                return object;
            };

            /**
             * Converts this ErrorResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ErrorResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ErrorResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ErrorResponse;
        })();

        notebook.ReadEntryRequest = (function() {

            /**
             * Properties of a ReadEntryRequest.
             * @memberof messages.notebook
             * @interface IReadEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] ReadEntryRequest context
             * @property {messages.notebook.ReadEntryRequest.IPayload|null} [payload] ReadEntryRequest payload
             */

            /**
             * Constructs a new ReadEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a ReadEntryRequest.
             * @implements IReadEntryRequest
             * @constructor
             * @param {messages.notebook.IReadEntryRequest=} [properties] Properties to set
             */
            function ReadEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.ReadEntryRequest
             * @instance
             */
            ReadEntryRequest.prototype.context = null;

            /**
             * ReadEntryRequest payload.
             * @member {messages.notebook.ReadEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.ReadEntryRequest
             * @instance
             */
            ReadEntryRequest.prototype.payload = null;

            /**
             * Creates a new ReadEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.IReadEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest instance
             */
            ReadEntryRequest.create = function create(properties) {
                return new ReadEntryRequest(properties);
            };

            /**
             * Encodes the specified ReadEntryRequest message. Does not implicitly {@link messages.notebook.ReadEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.IReadEntryRequest} message ReadEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ReadEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReadEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.IReadEntryRequest} message ReadEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ReadEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReadEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadEntryRequest message.
             * @function verify
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ReadEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ReadEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest
             */
            ReadEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ReadEntryRequest)
                    return object;
                var message = new $root.messages.notebook.ReadEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ReadEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ReadEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.ReadEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ReadEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.ReadEntryRequest} message ReadEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ReadEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ReadEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.ReadEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ReadEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ReadEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ReadEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ReadEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ReadEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.ReadEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ReadEntryRequest;
        })();

        notebook.ReadEntryResponse = (function() {

            /**
             * Properties of a ReadEntryResponse.
             * @memberof messages.notebook
             * @interface IReadEntryResponse
             * @property {google.rpc.IStatus|null} [status] ReadEntryResponse status
             * @property {messages.notebook.IResponseContext|null} [context] ReadEntryResponse context
             * @property {messages.notebook.ReadEntryResponse.IPayload|null} [payload] ReadEntryResponse payload
             */

            /**
             * Constructs a new ReadEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a ReadEntryResponse.
             * @implements IReadEntryResponse
             * @constructor
             * @param {messages.notebook.IReadEntryResponse=} [properties] Properties to set
             */
            function ReadEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadEntryResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             */
            ReadEntryResponse.prototype.status = null;

            /**
             * ReadEntryResponse context.
             * @member {messages.notebook.IResponseContext|null|undefined} context
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             */
            ReadEntryResponse.prototype.context = null;

            /**
             * ReadEntryResponse payload.
             * @member {messages.notebook.ReadEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             */
            ReadEntryResponse.prototype.payload = null;

            /**
             * Creates a new ReadEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.IReadEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse instance
             */
            ReadEntryResponse.create = function create(properties) {
                return new ReadEntryResponse(properties);
            };

            /**
             * Encodes the specified ReadEntryResponse message. Does not implicitly {@link messages.notebook.ReadEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.IReadEntryResponse} message ReadEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.ResponseContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ReadEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReadEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.IReadEntryResponse} message ReadEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.context = $root.messages.notebook.ResponseContext.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.payload = $root.messages.notebook.ReadEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReadEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadEntryResponse message.
             * @function verify
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.ResponseContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ReadEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ReadEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse
             */
            ReadEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ReadEntryResponse)
                    return object;
                var message = new $root.messages.notebook.ReadEntryResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.ReadEntryResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ReadEntryResponse.context: object expected");
                    message.context = $root.messages.notebook.ResponseContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ReadEntryResponse.payload: object expected");
                    message.payload = $root.messages.notebook.ReadEntryResponse.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ReadEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.ReadEntryResponse} message ReadEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.context = null;
                    object.payload = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.ResponseContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ReadEntryResponse.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ReadEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ReadEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ReadEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {messages.notebook.INullableTimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ReadEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ReadEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {messages.notebook.INullableTimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.messages.notebook.NullableTimestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.messages.notebook.NullableTimestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.messages.notebook.NullableTimestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ReadEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.ReadEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.ReadEntryResponse.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.ReadEntryResponse.Payload.updatedAt: object expected");
                        message.updatedAt = $root.messages.notebook.NullableTimestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.messages.notebook.NullableTimestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ReadEntryResponse;
        })();

        notebook.StartNewEntryRequest = (function() {

            /**
             * Properties of a StartNewEntryRequest.
             * @memberof messages.notebook
             * @interface IStartNewEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] StartNewEntryRequest context
             * @property {messages.notebook.StartNewEntryRequest.IPayload|null} [payload] StartNewEntryRequest payload
             */

            /**
             * Constructs a new StartNewEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a StartNewEntryRequest.
             * @implements IStartNewEntryRequest
             * @constructor
             * @param {messages.notebook.IStartNewEntryRequest=} [properties] Properties to set
             */
            function StartNewEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartNewEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.StartNewEntryRequest
             * @instance
             */
            StartNewEntryRequest.prototype.context = null;

            /**
             * StartNewEntryRequest payload.
             * @member {messages.notebook.StartNewEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.StartNewEntryRequest
             * @instance
             */
            StartNewEntryRequest.prototype.payload = null;

            /**
             * Creates a new StartNewEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.IStartNewEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest instance
             */
            StartNewEntryRequest.create = function create(properties) {
                return new StartNewEntryRequest(properties);
            };

            /**
             * Encodes the specified StartNewEntryRequest message. Does not implicitly {@link messages.notebook.StartNewEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.IStartNewEntryRequest} message StartNewEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.StartNewEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StartNewEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.IStartNewEntryRequest} message StartNewEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartNewEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.StartNewEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartNewEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartNewEntryRequest message.
             * @function verify
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartNewEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.StartNewEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a StartNewEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest
             */
            StartNewEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.StartNewEntryRequest)
                    return object;
                var message = new $root.messages.notebook.StartNewEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.StartNewEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a StartNewEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.StartNewEntryRequest} message StartNewEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartNewEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.StartNewEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this StartNewEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.StartNewEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartNewEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StartNewEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.StartNewEntryRequest
                 * @interface IPayload
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.StartNewEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.StartNewEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.StartNewEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.StartNewEntryRequest.Payload();
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.creatorId = "";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return StartNewEntryRequest;
        })();

        notebook.StartNewEntryResponse = (function() {

            /**
             * Properties of a StartNewEntryResponse.
             * @memberof messages.notebook
             * @interface IStartNewEntryResponse
             * @property {google.rpc.IStatus|null} [status] StartNewEntryResponse status
             * @property {messages.notebook.IResponseContext|null} [context] StartNewEntryResponse context
             * @property {messages.notebook.StartNewEntryResponse.IPayload|null} [payload] StartNewEntryResponse payload
             */

            /**
             * Constructs a new StartNewEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a StartNewEntryResponse.
             * @implements IStartNewEntryResponse
             * @constructor
             * @param {messages.notebook.IStartNewEntryResponse=} [properties] Properties to set
             */
            function StartNewEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartNewEntryResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             */
            StartNewEntryResponse.prototype.status = null;

            /**
             * StartNewEntryResponse context.
             * @member {messages.notebook.IResponseContext|null|undefined} context
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             */
            StartNewEntryResponse.prototype.context = null;

            /**
             * StartNewEntryResponse payload.
             * @member {messages.notebook.StartNewEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             */
            StartNewEntryResponse.prototype.payload = null;

            /**
             * Creates a new StartNewEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.IStartNewEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse instance
             */
            StartNewEntryResponse.create = function create(properties) {
                return new StartNewEntryResponse(properties);
            };

            /**
             * Encodes the specified StartNewEntryResponse message. Does not implicitly {@link messages.notebook.StartNewEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.IStartNewEntryResponse} message StartNewEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.ResponseContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.StartNewEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StartNewEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.IStartNewEntryResponse} message StartNewEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartNewEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.context = $root.messages.notebook.ResponseContext.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.payload = $root.messages.notebook.StartNewEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartNewEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartNewEntryResponse message.
             * @function verify
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartNewEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.ResponseContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.StartNewEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a StartNewEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse
             */
            StartNewEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.StartNewEntryResponse)
                    return object;
                var message = new $root.messages.notebook.StartNewEntryResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryResponse.context: object expected");
                    message.context = $root.messages.notebook.ResponseContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryResponse.payload: object expected");
                    message.payload = $root.messages.notebook.StartNewEntryResponse.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a StartNewEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.StartNewEntryResponse} message StartNewEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartNewEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.context = null;
                    object.payload = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.ResponseContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.StartNewEntryResponse.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this StartNewEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartNewEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StartNewEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.StartNewEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.StartNewEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.StartNewEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.StartNewEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.StartNewEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return StartNewEntryResponse;
        })();

        notebook.ChangeEntryRequest = (function() {

            /**
             * Properties of a ChangeEntryRequest.
             * @memberof messages.notebook
             * @interface IChangeEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] ChangeEntryRequest context
             * @property {messages.notebook.ChangeEntryRequest.IPayload|null} [payload] ChangeEntryRequest payload
             */

            /**
             * Constructs a new ChangeEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a ChangeEntryRequest.
             * @implements IChangeEntryRequest
             * @constructor
             * @param {messages.notebook.IChangeEntryRequest=} [properties] Properties to set
             */
            function ChangeEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangeEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.ChangeEntryRequest
             * @instance
             */
            ChangeEntryRequest.prototype.context = null;

            /**
             * ChangeEntryRequest payload.
             * @member {messages.notebook.ChangeEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.ChangeEntryRequest
             * @instance
             */
            ChangeEntryRequest.prototype.payload = null;

            /**
             * Creates a new ChangeEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.IChangeEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest instance
             */
            ChangeEntryRequest.create = function create(properties) {
                return new ChangeEntryRequest(properties);
            };

            /**
             * Encodes the specified ChangeEntryRequest message. Does not implicitly {@link messages.notebook.ChangeEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.IChangeEntryRequest} message ChangeEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ChangeEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChangeEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.IChangeEntryRequest} message ChangeEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ChangeEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChangeEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeEntryRequest message.
             * @function verify
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ChangeEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ChangeEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest
             */
            ChangeEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ChangeEntryRequest)
                    return object;
                var message = new $root.messages.notebook.ChangeEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.ChangeEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChangeEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.ChangeEntryRequest} message ChangeEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ChangeEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ChangeEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.ChangeEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ChangeEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ChangeEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ChangeEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ChangeEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ChangeEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ChangeEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.ChangeEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ChangeEntryRequest;
        })();

        notebook.ChangeEntryResponse = (function() {

            /**
             * Properties of a ChangeEntryResponse.
             * @memberof messages.notebook
             * @interface IChangeEntryResponse
             * @property {google.rpc.IStatus|null} [status] ChangeEntryResponse status
             * @property {messages.notebook.IResponseContext|null} [context] ChangeEntryResponse context
             * @property {messages.notebook.ChangeEntryResponse.IPayload|null} [payload] ChangeEntryResponse payload
             */

            /**
             * Constructs a new ChangeEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a ChangeEntryResponse.
             * @implements IChangeEntryResponse
             * @constructor
             * @param {messages.notebook.IChangeEntryResponse=} [properties] Properties to set
             */
            function ChangeEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangeEntryResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             */
            ChangeEntryResponse.prototype.status = null;

            /**
             * ChangeEntryResponse context.
             * @member {messages.notebook.IResponseContext|null|undefined} context
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             */
            ChangeEntryResponse.prototype.context = null;

            /**
             * ChangeEntryResponse payload.
             * @member {messages.notebook.ChangeEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             */
            ChangeEntryResponse.prototype.payload = null;

            /**
             * Creates a new ChangeEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.IChangeEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse instance
             */
            ChangeEntryResponse.create = function create(properties) {
                return new ChangeEntryResponse(properties);
            };

            /**
             * Encodes the specified ChangeEntryResponse message. Does not implicitly {@link messages.notebook.ChangeEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.IChangeEntryResponse} message ChangeEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.ResponseContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ChangeEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChangeEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.IChangeEntryResponse} message ChangeEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.context = $root.messages.notebook.ResponseContext.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.payload = $root.messages.notebook.ChangeEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChangeEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeEntryResponse message.
             * @function verify
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.ResponseContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ChangeEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ChangeEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse
             */
            ChangeEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ChangeEntryResponse)
                    return object;
                var message = new $root.messages.notebook.ChangeEntryResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryResponse.context: object expected");
                    message.context = $root.messages.notebook.ResponseContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryResponse.payload: object expected");
                    message.payload = $root.messages.notebook.ChangeEntryResponse.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChangeEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.ChangeEntryResponse} message ChangeEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.context = null;
                    object.payload = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.ResponseContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ChangeEntryResponse.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ChangeEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ChangeEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ChangeEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ChangeEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ChangeEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ChangeEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ChangeEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.ChangeEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.ChangeEntryResponse.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ChangeEntryResponse;
        })();

        notebook.ListEntriesRequest = (function() {

            /**
             * Properties of a ListEntriesRequest.
             * @memberof messages.notebook
             * @interface IListEntriesRequest
             * @property {messages.notebook.IRequestContext|null} [context] ListEntriesRequest context
             * @property {messages.notebook.ListEntriesRequest.IPayload|null} [payload] ListEntriesRequest payload
             */

            /**
             * Constructs a new ListEntriesRequest.
             * @memberof messages.notebook
             * @classdesc Represents a ListEntriesRequest.
             * @implements IListEntriesRequest
             * @constructor
             * @param {messages.notebook.IListEntriesRequest=} [properties] Properties to set
             */
            function ListEntriesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.context = null;

            /**
             * ListEntriesRequest payload.
             * @member {messages.notebook.ListEntriesRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.payload = null;

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.IListEntriesRequest=} [properties] Properties to set
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest instance
             */
            ListEntriesRequest.create = function create(properties) {
                return new ListEntriesRequest(properties);
            };

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.notebook.ListEntriesRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ListEntriesRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ListEntriesRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesRequest message.
             * @function verify
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ListEntriesRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest
             */
            ListEntriesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ListEntriesRequest)
                    return object;
                var message = new $root.messages.notebook.ListEntriesRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ListEntriesRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ListEntriesRequest.payload: object expected");
                    message.payload = $root.messages.notebook.ListEntriesRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.ListEntriesRequest} message ListEntriesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ListEntriesRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ListEntriesRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.ListEntriesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ListEntriesRequest
                 * @interface IPayload
                 * @property {number|null} [first] Payload first
                 * @property {string|null} [after] Payload after
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ListEntriesRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ListEntriesRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload first.
                 * @member {number} first
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.first = 0;

                /**
                 * Payload after.
                 * @member {string} after
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.after = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.first != null && message.hasOwnProperty("first"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.first);
                    if (message.after != null && message.hasOwnProperty("after"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.after);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.first = reader.int32();
                            break;
                        case 2:
                            message.after = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.first != null && message.hasOwnProperty("first"))
                        if (!$util.isInteger(message.first))
                            return "first: integer expected";
                    if (message.after != null && message.hasOwnProperty("after"))
                        if (!$util.isString(message.after))
                            return "after: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesRequest.Payload();
                    if (object.first != null)
                        message.first = object.first | 0;
                    if (object.after != null)
                        message.after = String(object.after);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.first = 0;
                        object.after = "";
                        object.creatorId = "";
                    }
                    if (message.first != null && message.hasOwnProperty("first"))
                        object.first = message.first;
                    if (message.after != null && message.hasOwnProperty("after"))
                        object.after = message.after;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ListEntriesRequest;
        })();

        notebook.ListEntriesResponse = (function() {

            /**
             * Properties of a ListEntriesResponse.
             * @memberof messages.notebook
             * @interface IListEntriesResponse
             * @property {google.rpc.IStatus|null} [status] ListEntriesResponse status
             * @property {messages.notebook.IResponseContext|null} [context] ListEntriesResponse context
             * @property {messages.notebook.ListEntriesResponse.IPayload|null} [payload] ListEntriesResponse payload
             */

            /**
             * Constructs a new ListEntriesResponse.
             * @memberof messages.notebook
             * @classdesc Represents a ListEntriesResponse.
             * @implements IListEntriesResponse
             * @constructor
             * @param {messages.notebook.IListEntriesResponse=} [properties] Properties to set
             */
            function ListEntriesResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.status = null;

            /**
             * ListEntriesResponse context.
             * @member {messages.notebook.IResponseContext|null|undefined} context
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.context = null;

            /**
             * ListEntriesResponse payload.
             * @member {messages.notebook.ListEntriesResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.payload = null;

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.IListEntriesResponse=} [properties] Properties to set
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse instance
             */
            ListEntriesResponse.create = function create(properties) {
                return new ListEntriesResponse(properties);
            };

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.notebook.ListEntriesResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.ResponseContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ListEntriesResponse.Payload.encode(message.payload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.context = $root.messages.notebook.ResponseContext.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.payload = $root.messages.notebook.ListEntriesResponse.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesResponse message.
             * @function verify
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.ResponseContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ListEntriesResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse
             */
            ListEntriesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ListEntriesResponse)
                    return object;
                var message = new $root.messages.notebook.ListEntriesResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.ListEntriesResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ListEntriesResponse.context: object expected");
                    message.context = $root.messages.notebook.ResponseContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ListEntriesResponse.payload: object expected");
                    message.payload = $root.messages.notebook.ListEntriesResponse.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.ListEntriesResponse} message ListEntriesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.context = null;
                    object.payload = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.ResponseContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ListEntriesResponse.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ListEntriesResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesResponse.PageInfo = (function() {

                /**
                 * Properties of a PageInfo.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @interface IPageInfo
                 * @property {number|null} [totalCount] PageInfo totalCount
                 * @property {boolean|null} [hasNextPage] PageInfo hasNextPage
                 * @property {string|null} [startCursor] PageInfo startCursor
                 * @property {string|null} [endCursor] PageInfo endCursor
                 */

                /**
                 * Constructs a new PageInfo.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @classdesc Represents a PageInfo.
                 * @implements IPageInfo
                 * @constructor
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 */
                function PageInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PageInfo totalCount.
                 * @member {number} totalCount
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.totalCount = 0;

                /**
                 * PageInfo hasNextPage.
                 * @member {boolean} hasNextPage
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.hasNextPage = false;

                /**
                 * PageInfo startCursor.
                 * @member {string} startCursor
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.startCursor = "";

                /**
                 * PageInfo endCursor.
                 * @member {string} endCursor
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.endCursor = "";

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo instance
                 */
                PageInfo.create = function create(properties) {
                    return new PageInfo(properties);
                };

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.notebook.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCount);
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasNextPage);
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.startCursor);
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.endCursor);
                    return writer;
                };

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse.PageInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.totalCount = reader.int32();
                            break;
                        case 2:
                            message.hasNextPage = reader.bool();
                            break;
                        case 3:
                            message.startCursor = reader.string();
                            break;
                        case 4:
                            message.endCursor = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PageInfo message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PageInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        if (!$util.isInteger(message.totalCount))
                            return "totalCount: integer expected";
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        if (typeof message.hasNextPage !== "boolean")
                            return "hasNextPage: boolean expected";
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        if (!$util.isString(message.startCursor))
                            return "startCursor: string expected";
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        if (!$util.isString(message.endCursor))
                            return "endCursor: string expected";
                    return null;
                };

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo
                 */
                PageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesResponse.PageInfo)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesResponse.PageInfo();
                    if (object.totalCount != null)
                        message.totalCount = object.totalCount | 0;
                    if (object.hasNextPage != null)
                        message.hasNextPage = Boolean(object.hasNextPage);
                    if (object.startCursor != null)
                        message.startCursor = String(object.startCursor);
                    if (object.endCursor != null)
                        message.endCursor = String(object.endCursor);
                    return message;
                };

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.PageInfo} message PageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.totalCount = 0;
                        object.hasNextPage = false;
                        object.startCursor = "";
                        object.endCursor = "";
                    }
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        object.totalCount = message.totalCount;
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        object.hasNextPage = message.hasNextPage;
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        object.startCursor = message.startCursor;
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        object.endCursor = message.endCursor;
                    return object;
                };

                /**
                 * Converts this PageInfo to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PageInfo;
            })();

            ListEntriesResponse.Entry = (function() {

                /**
                 * Properties of an Entry.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @interface IEntry
                 * @property {string|null} [id] Entry id
                 * @property {string|null} [text] Entry text
                 * @property {string|null} [creatorId] Entry creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Entry createdAt
                 * @property {messages.notebook.INullableTimestamp|null} [updatedAt] Entry updatedAt
                 */

                /**
                 * Constructs a new Entry.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @classdesc Represents an Entry.
                 * @implements IEntry
                 * @constructor
                 * @param {messages.notebook.ListEntriesResponse.IEntry=} [properties] Properties to set
                 */
                function Entry(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Entry id.
                 * @member {string} id
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @instance
                 */
                Entry.prototype.id = "";

                /**
                 * Entry text.
                 * @member {string} text
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @instance
                 */
                Entry.prototype.text = "";

                /**
                 * Entry creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @instance
                 */
                Entry.prototype.creatorId = "";

                /**
                 * Entry createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @instance
                 */
                Entry.prototype.createdAt = null;

                /**
                 * Entry updatedAt.
                 * @member {messages.notebook.INullableTimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @instance
                 */
                Entry.prototype.updatedAt = null;

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IEntry=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesResponse.Entry} Entry instance
                 */
                Entry.create = function create(properties) {
                    return new Entry(properties);
                };

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link messages.notebook.ListEntriesResponse.Entry.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IEntry} message Entry message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entry.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.messages.notebook.NullableTimestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.Entry.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IEntry} message Entry message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entry.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesResponse.Entry} Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entry.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse.Entry();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.messages.notebook.NullableTimestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesResponse.Entry} Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entry.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Entry message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Entry.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.messages.notebook.NullableTimestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesResponse.Entry} Entry
                 */
                Entry.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesResponse.Entry)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesResponse.Entry();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.ListEntriesResponse.Entry.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.ListEntriesResponse.Entry.updatedAt: object expected");
                        message.updatedAt = $root.messages.notebook.NullableTimestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.Entry} message Entry
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Entry.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.messages.notebook.NullableTimestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Entry to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesResponse.Entry
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Entry.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Entry;
            })();

            ListEntriesResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @interface IPayload
                 * @property {Array.<messages.notebook.ListEntriesResponse.IEntry>|null} [entries] Payload entries
                 * @property {messages.notebook.ListEntriesResponse.IPageInfo|null} [pageInfo] Payload pageInfo
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ListEntriesResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    this.entries = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload entries.
                 * @member {Array.<messages.notebook.ListEntriesResponse.IEntry>} entries
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @instance
                 */
                Payload.prototype.entries = $util.emptyArray;

                /**
                 * Payload pageInfo.
                 * @member {messages.notebook.ListEntriesResponse.IPageInfo|null|undefined} pageInfo
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @instance
                 */
                Payload.prototype.pageInfo = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ListEntriesResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entries != null && message.entries.length)
                        for (var i = 0; i < message.entries.length; ++i)
                            $root.messages.notebook.ListEntriesResponse.Entry.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                        $root.messages.notebook.ListEntriesResponse.PageInfo.encode(message.pageInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.entries && message.entries.length))
                                message.entries = [];
                            message.entries.push($root.messages.notebook.ListEntriesResponse.Entry.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.pageInfo = $root.messages.notebook.ListEntriesResponse.PageInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entries != null && message.hasOwnProperty("entries")) {
                        if (!Array.isArray(message.entries))
                            return "entries: array expected";
                        for (var i = 0; i < message.entries.length; ++i) {
                            var error = $root.messages.notebook.ListEntriesResponse.Entry.verify(message.entries[i]);
                            if (error)
                                return "entries." + error;
                        }
                    }
                    if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                        var error = $root.messages.notebook.ListEntriesResponse.PageInfo.verify(message.pageInfo);
                        if (error)
                            return "pageInfo." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesResponse.Payload();
                    if (object.entries) {
                        if (!Array.isArray(object.entries))
                            throw TypeError(".messages.notebook.ListEntriesResponse.Payload.entries: array expected");
                        message.entries = [];
                        for (var i = 0; i < object.entries.length; ++i) {
                            if (typeof object.entries[i] !== "object")
                                throw TypeError(".messages.notebook.ListEntriesResponse.Payload.entries: object expected");
                            message.entries[i] = $root.messages.notebook.ListEntriesResponse.Entry.fromObject(object.entries[i]);
                        }
                    }
                    if (object.pageInfo != null) {
                        if (typeof object.pageInfo !== "object")
                            throw TypeError(".messages.notebook.ListEntriesResponse.Payload.pageInfo: object expected");
                        message.pageInfo = $root.messages.notebook.ListEntriesResponse.PageInfo.fromObject(object.pageInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.entries = [];
                    if (options.defaults)
                        object.pageInfo = null;
                    if (message.entries && message.entries.length) {
                        object.entries = [];
                        for (var j = 0; j < message.entries.length; ++j)
                            object.entries[j] = $root.messages.notebook.ListEntriesResponse.Entry.toObject(message.entries[j], options);
                    }
                    if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                        object.pageInfo = $root.messages.notebook.ListEntriesResponse.PageInfo.toObject(message.pageInfo, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ListEntriesResponse;
        })();

        notebook.DiscardEntryRequest = (function() {

            /**
             * Properties of a DiscardEntryRequest.
             * @memberof messages.notebook
             * @interface IDiscardEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] DiscardEntryRequest context
             * @property {messages.notebook.DiscardEntryRequest.IPayload|null} [payload] DiscardEntryRequest payload
             */

            /**
             * Constructs a new DiscardEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a DiscardEntryRequest.
             * @implements IDiscardEntryRequest
             * @constructor
             * @param {messages.notebook.IDiscardEntryRequest=} [properties] Properties to set
             */
            function DiscardEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.DiscardEntryRequest
             * @instance
             */
            DiscardEntryRequest.prototype.context = null;

            /**
             * DiscardEntryRequest payload.
             * @member {messages.notebook.DiscardEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.DiscardEntryRequest
             * @instance
             */
            DiscardEntryRequest.prototype.payload = null;

            /**
             * Creates a new DiscardEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.IDiscardEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest instance
             */
            DiscardEntryRequest.create = function create(properties) {
                return new DiscardEntryRequest(properties);
            };

            /**
             * Encodes the specified DiscardEntryRequest message. Does not implicitly {@link messages.notebook.DiscardEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.IDiscardEntryRequest} message DiscardEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.DiscardEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DiscardEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.IDiscardEntryRequest} message DiscardEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.DiscardEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.DiscardEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DiscardEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardEntryRequest message.
             * @function verify
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.DiscardEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a DiscardEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest
             */
            DiscardEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.DiscardEntryRequest)
                    return object;
                var message = new $root.messages.notebook.DiscardEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.DiscardEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a DiscardEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.DiscardEntryRequest} message DiscardEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.DiscardEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this DiscardEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.DiscardEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DiscardEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.DiscardEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.DiscardEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.DiscardEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.DiscardEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.DiscardEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.DiscardEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.DiscardEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return DiscardEntryRequest;
        })();

        notebook.DiscardEntryResponse = (function() {

            /**
             * Properties of a DiscardEntryResponse.
             * @memberof messages.notebook
             * @interface IDiscardEntryResponse
             * @property {google.rpc.IStatus|null} [status] DiscardEntryResponse status
             * @property {messages.notebook.IResponseContext|null} [context] DiscardEntryResponse context
             */

            /**
             * Constructs a new DiscardEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a DiscardEntryResponse.
             * @implements IDiscardEntryResponse
             * @constructor
             * @param {messages.notebook.IDiscardEntryResponse=} [properties] Properties to set
             */
            function DiscardEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardEntryResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.DiscardEntryResponse
             * @instance
             */
            DiscardEntryResponse.prototype.status = null;

            /**
             * DiscardEntryResponse context.
             * @member {messages.notebook.IResponseContext|null|undefined} context
             * @memberof messages.notebook.DiscardEntryResponse
             * @instance
             */
            DiscardEntryResponse.prototype.context = null;

            /**
             * Creates a new DiscardEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.IDiscardEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse instance
             */
            DiscardEntryResponse.create = function create(properties) {
                return new DiscardEntryResponse(properties);
            };

            /**
             * Encodes the specified DiscardEntryResponse message. Does not implicitly {@link messages.notebook.DiscardEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.IDiscardEntryResponse} message DiscardEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.ResponseContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DiscardEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.IDiscardEntryResponse} message DiscardEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.DiscardEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.context = $root.messages.notebook.ResponseContext.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DiscardEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardEntryResponse message.
             * @function verify
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.ResponseContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                return null;
            };

            /**
             * Creates a DiscardEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse
             */
            DiscardEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.DiscardEntryResponse)
                    return object;
                var message = new $root.messages.notebook.DiscardEntryResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryResponse.context: object expected");
                    message.context = $root.messages.notebook.ResponseContext.fromObject(object.context);
                }
                return message;
            };

            /**
             * Creates a plain object from a DiscardEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.DiscardEntryResponse} message DiscardEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.context = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.ResponseContext.toObject(message.context, options);
                return object;
            };

            /**
             * Converts this DiscardEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.DiscardEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DiscardEntryResponse;
        })();

        notebook.InfoEntryCreated = (function() {

            /**
             * Properties of an InfoEntryCreated.
             * @memberof messages.notebook
             * @interface IInfoEntryCreated
             * @property {messages.notebook.IInfoContext|null} [context] InfoEntryCreated context
             * @property {messages.notebook.InfoEntryCreated.IPayload|null} [payload] InfoEntryCreated payload
             */

            /**
             * Constructs a new InfoEntryCreated.
             * @memberof messages.notebook
             * @classdesc Represents an InfoEntryCreated.
             * @implements IInfoEntryCreated
             * @constructor
             * @param {messages.notebook.IInfoEntryCreated=} [properties] Properties to set
             */
            function InfoEntryCreated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryCreated context.
             * @member {messages.notebook.IInfoContext|null|undefined} context
             * @memberof messages.notebook.InfoEntryCreated
             * @instance
             */
            InfoEntryCreated.prototype.context = null;

            /**
             * InfoEntryCreated payload.
             * @member {messages.notebook.InfoEntryCreated.IPayload|null|undefined} payload
             * @memberof messages.notebook.InfoEntryCreated
             * @instance
             */
            InfoEntryCreated.prototype.payload = null;

            /**
             * Creates a new InfoEntryCreated instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.IInfoEntryCreated=} [properties] Properties to set
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated instance
             */
            InfoEntryCreated.create = function create(properties) {
                return new InfoEntryCreated(properties);
            };

            /**
             * Encodes the specified InfoEntryCreated message. Does not implicitly {@link messages.notebook.InfoEntryCreated.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.IInfoEntryCreated} message InfoEntryCreated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryCreated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.InfoContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.InfoEntryCreated.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryCreated message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryCreated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.IInfoEntryCreated} message InfoEntryCreated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryCreated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryCreated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryCreated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.InfoContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.InfoEntryCreated.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryCreated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryCreated message.
             * @function verify
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryCreated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.InfoContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.InfoEntryCreated.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryCreated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated
             */
            InfoEntryCreated.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoEntryCreated)
                    return object;
                var message = new $root.messages.notebook.InfoEntryCreated();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.InfoEntryCreated.context: object expected");
                    message.context = $root.messages.notebook.InfoContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.InfoEntryCreated.payload: object expected");
                    message.payload = $root.messages.notebook.InfoEntryCreated.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryCreated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.InfoEntryCreated} message InfoEntryCreated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryCreated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.InfoContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.InfoEntryCreated.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryCreated to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoEntryCreated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryCreated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryCreated.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.InfoEntryCreated
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.InfoEntryCreated
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.InfoEntryCreated.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryCreated.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryCreated.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryCreated.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.InfoEntryCreated.Payload)
                        return object;
                    var message = new $root.messages.notebook.InfoEntryCreated.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryCreated.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryCreated;
        })();

        notebook.InfoEntryUpdated = (function() {

            /**
             * Properties of an InfoEntryUpdated.
             * @memberof messages.notebook
             * @interface IInfoEntryUpdated
             * @property {messages.notebook.IInfoContext|null} [context] InfoEntryUpdated context
             * @property {messages.notebook.InfoEntryUpdated.IPayload|null} [payload] InfoEntryUpdated payload
             */

            /**
             * Constructs a new InfoEntryUpdated.
             * @memberof messages.notebook
             * @classdesc Represents an InfoEntryUpdated.
             * @implements IInfoEntryUpdated
             * @constructor
             * @param {messages.notebook.IInfoEntryUpdated=} [properties] Properties to set
             */
            function InfoEntryUpdated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryUpdated context.
             * @member {messages.notebook.IInfoContext|null|undefined} context
             * @memberof messages.notebook.InfoEntryUpdated
             * @instance
             */
            InfoEntryUpdated.prototype.context = null;

            /**
             * InfoEntryUpdated payload.
             * @member {messages.notebook.InfoEntryUpdated.IPayload|null|undefined} payload
             * @memberof messages.notebook.InfoEntryUpdated
             * @instance
             */
            InfoEntryUpdated.prototype.payload = null;

            /**
             * Creates a new InfoEntryUpdated instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.IInfoEntryUpdated=} [properties] Properties to set
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated instance
             */
            InfoEntryUpdated.create = function create(properties) {
                return new InfoEntryUpdated(properties);
            };

            /**
             * Encodes the specified InfoEntryUpdated message. Does not implicitly {@link messages.notebook.InfoEntryUpdated.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.IInfoEntryUpdated} message InfoEntryUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.InfoContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.InfoEntryUpdated.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryUpdated message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.IInfoEntryUpdated} message InfoEntryUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.InfoContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.InfoEntryUpdated.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryUpdated message.
             * @function verify
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.InfoContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.InfoEntryUpdated.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated
             */
            InfoEntryUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoEntryUpdated)
                    return object;
                var message = new $root.messages.notebook.InfoEntryUpdated();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.InfoEntryUpdated.context: object expected");
                    message.context = $root.messages.notebook.InfoContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.InfoEntryUpdated.payload: object expected");
                    message.payload = $root.messages.notebook.InfoEntryUpdated.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.InfoEntryUpdated} message InfoEntryUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.InfoContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.InfoEntryUpdated.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryUpdated to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoEntryUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryUpdated.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.InfoEntryUpdated
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.InfoEntryUpdated
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.InfoEntryUpdated.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryUpdated.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.InfoEntryUpdated.Payload)
                        return object;
                    var message = new $root.messages.notebook.InfoEntryUpdated.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryUpdated.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryUpdated.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryUpdated;
        })();

        notebook.InfoEntryDeleted = (function() {

            /**
             * Properties of an InfoEntryDeleted.
             * @memberof messages.notebook
             * @interface IInfoEntryDeleted
             * @property {messages.notebook.IInfoContext|null} [context] InfoEntryDeleted context
             * @property {messages.notebook.InfoEntryDeleted.IPayload|null} [payload] InfoEntryDeleted payload
             */

            /**
             * Constructs a new InfoEntryDeleted.
             * @memberof messages.notebook
             * @classdesc Represents an InfoEntryDeleted.
             * @implements IInfoEntryDeleted
             * @constructor
             * @param {messages.notebook.IInfoEntryDeleted=} [properties] Properties to set
             */
            function InfoEntryDeleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryDeleted context.
             * @member {messages.notebook.IInfoContext|null|undefined} context
             * @memberof messages.notebook.InfoEntryDeleted
             * @instance
             */
            InfoEntryDeleted.prototype.context = null;

            /**
             * InfoEntryDeleted payload.
             * @member {messages.notebook.InfoEntryDeleted.IPayload|null|undefined} payload
             * @memberof messages.notebook.InfoEntryDeleted
             * @instance
             */
            InfoEntryDeleted.prototype.payload = null;

            /**
             * Creates a new InfoEntryDeleted instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.IInfoEntryDeleted=} [properties] Properties to set
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted instance
             */
            InfoEntryDeleted.create = function create(properties) {
                return new InfoEntryDeleted(properties);
            };

            /**
             * Encodes the specified InfoEntryDeleted message. Does not implicitly {@link messages.notebook.InfoEntryDeleted.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.IInfoEntryDeleted} message InfoEntryDeleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryDeleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.InfoContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.InfoEntryDeleted.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryDeleted message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryDeleted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.IInfoEntryDeleted} message InfoEntryDeleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryDeleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryDeleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryDeleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.InfoContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.InfoEntryDeleted.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryDeleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryDeleted message.
             * @function verify
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryDeleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.InfoContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.InfoEntryDeleted.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryDeleted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted
             */
            InfoEntryDeleted.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoEntryDeleted)
                    return object;
                var message = new $root.messages.notebook.InfoEntryDeleted();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.InfoEntryDeleted.context: object expected");
                    message.context = $root.messages.notebook.InfoContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.InfoEntryDeleted.payload: object expected");
                    message.payload = $root.messages.notebook.InfoEntryDeleted.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryDeleted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.InfoEntryDeleted} message InfoEntryDeleted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryDeleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.InfoContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.InfoEntryDeleted.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryDeleted to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoEntryDeleted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryDeleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryDeleted.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.InfoEntryDeleted
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {messages.notebook.INullableTimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.InfoEntryDeleted
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.InfoEntryDeleted.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {messages.notebook.INullableTimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.messages.notebook.NullableTimestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryDeleted.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.messages.notebook.NullableTimestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.messages.notebook.NullableTimestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.InfoEntryDeleted.Payload)
                        return object;
                    var message = new $root.messages.notebook.InfoEntryDeleted.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryDeleted.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryDeleted.Payload.updatedAt: object expected");
                        message.updatedAt = $root.messages.notebook.NullableTimestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.messages.notebook.NullableTimestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryDeleted;
        })();

        return notebook;
    })();

    return messages;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && message.hasOwnProperty("fields"))
                    for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.fields === $util.emptyObject)
                            message.fields = {};
                        key = reader.string();
                        reader.pos++;
                        message.fields[key] = $root.google.protobuf.Value.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    var key = Object.keys(message.fields);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                var message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                var keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = 0;

            /**
             * Value numberValue.
             * @member {number} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = 0;

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && message.hasOwnProperty("nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && message.hasOwnProperty("numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && message.hasOwnProperty("structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && message.hasOwnProperty("listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nullValue = reader.int32();
                        break;
                    case 2:
                        message.numberValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                var message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {string}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                var message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListValue;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    google.rpc = (function() {

        /**
         * Namespace rpc.
         * @memberof google
         * @namespace
         */
        var rpc = {};

        rpc.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof google.rpc
             * @interface IStatus
             * @property {number|null} [code] Status code
             * @property {string|null} [message] Status message
             * @property {Array.<google.protobuf.IAny>|null} [details] Status details
             */

            /**
             * Constructs a new Status.
             * @memberof google.rpc
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {google.rpc.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                this.details = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status code.
             * @member {number} code
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.code = 0;

            /**
             * Status message.
             * @member {string} message
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.message = "";

            /**
             * Status details.
             * @member {Array.<google.protobuf.IAny>} details
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.details = $util.emptyArray;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus=} [properties] Properties to set
             * @returns {google.rpc.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.details != null && message.details.length)
                    for (var i = 0; i < message.details.length; ++i)
                        $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Status();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        if (!(message.details && message.details.length))
                            message.details = [];
                        message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    if (!Array.isArray(message.details))
                        return "details: array expected";
                    for (var i = 0; i < message.details.length; ++i) {
                        var error = $root.google.protobuf.Any.verify(message.details[i]);
                        if (error)
                            return "details." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.Status)
                    return object;
                var message = new $root.google.rpc.Status();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.details) {
                    if (!Array.isArray(object.details))
                        throw TypeError(".google.rpc.Status.details: array expected");
                    message.details = [];
                    for (var i = 0; i < object.details.length; ++i) {
                        if (typeof object.details[i] !== "object")
                            throw TypeError(".google.rpc.Status.details: object expected");
                        message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.details = [];
                if (options.defaults) {
                    object.code = 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.details && message.details.length) {
                    object.details = [];
                    for (var j = 0; j < message.details.length; ++j)
                        object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
                }
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof google.rpc.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Status;
        })();

        /**
         * Code enum.
         * @name google.rpc.Code
         * @enum {string}
         * @property {number} OK=0 OK value
         * @property {number} CANCELLED=1 CANCELLED value
         * @property {number} UNKNOWN=2 UNKNOWN value
         * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
         * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
         * @property {number} NOT_FOUND=5 NOT_FOUND value
         * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
         * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
         * @property {number} UNAUTHENTICATED=16 UNAUTHENTICATED value
         * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
         * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
         * @property {number} ABORTED=10 ABORTED value
         * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
         * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
         * @property {number} INTERNAL=13 INTERNAL value
         * @property {number} UNAVAILABLE=14 UNAVAILABLE value
         * @property {number} DATA_LOSS=15 DATA_LOSS value
         */
        rpc.Code = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "CANCELLED"] = 1;
            values[valuesById[2] = "UNKNOWN"] = 2;
            values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
            values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
            values[valuesById[5] = "NOT_FOUND"] = 5;
            values[valuesById[6] = "ALREADY_EXISTS"] = 6;
            values[valuesById[7] = "PERMISSION_DENIED"] = 7;
            values[valuesById[16] = "UNAUTHENTICATED"] = 16;
            values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
            values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
            values[valuesById[10] = "ABORTED"] = 10;
            values[valuesById[11] = "OUT_OF_RANGE"] = 11;
            values[valuesById[12] = "UNIMPLEMENTED"] = 12;
            values[valuesById[13] = "INTERNAL"] = 13;
            values[valuesById[14] = "UNAVAILABLE"] = 14;
            values[valuesById[15] = "DATA_LOSS"] = 15;
            return values;
        })();

        return rpc;
    })();

    return google;
})();

module.exports = $root;

/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * This is the response for a viewRequests
 *
 * @param view 
 * @param signature 
 */


data class CreateViewResponse (

    @Json(name = "view")
    val view: kotlin.String? = null,

    @Json(name = "signature")
    val signature: kotlin.String? = null

)


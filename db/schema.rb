# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 1) do

  create_table "mattfewer", force: :cascade do |t|
    t.string "name", limit: 50
  end

  create_table "play_evolutions", force: :cascade do |t|
    t.string   "hash",          limit: 255,      null: false
    t.datetime "applied_at",                     null: false
    t.text     "apply_script",  limit: 16777215
    t.text     "revert_script", limit: 16777215
    t.string   "state",         limit: 255
    t.text     "last_problem",  limit: 16777215
  end

  create_table "submissionanalytics", primary_key: "ID", force: :cascade do |t|
    t.text    "AGENT_NAME",                    limit: 65535
    t.text    "AGENT_CODE",                    limit: 65535
    t.text    "PARENT_AGENT_CODE",             limit: 65535
    t.text    "PARENT_AGENT_NAME",             limit: 65535
    t.text    "BUSINESS_UNIT_NAME",            limit: 65535
    t.text    "OPERATING_UNIT_NAME",           limit: 65535
    t.text    "UNDERWRITER_NAME",              limit: 65535
    t.text    "SUBMISSION_NO",                 limit: 65535
    t.text    "POL_NUM",                       limit: 65535
    t.text    "RENEWAL_FLAG",                  limit: 65535
    t.integer "RECEIVED_COUNT",                limit: 4
    t.integer "QUOTED_COUNT",                  limit: 4
    t.integer "BOUND_COUNT",                   limit: 4
    t.integer "REJECT_COUNT",                  limit: 4
    t.text    "REJECT_AFTER_QUOTE_FLAG",       limit: 65535
    t.float   "RECDTOQUOTETIME",               limit: 53
    t.text    "RECDTOQUOTETIME_BAND",          limit: 65535
    t.integer "RECDTOREJECTTIME",              limit: 4
    t.text    "RECDTOREJECTTIME_BAND",         limit: 65535
    t.integer "RECDTOPENDINGTIME",             limit: 4
    t.float   "QUOTETOBOUNDTIME",              limit: 53
    t.text    "QUOTETOBOUNDTIME_BAND",         limit: 65535
    t.text    "RECEIVED_DATE",                 limit: 65535
    t.text    "RECEIVED_MONTH",                limit: 65535
    t.text    "RECEIVED_DAY",                  limit: 65535
    t.integer "RECEIVED_YEAR",                 limit: 4
    t.text    "REJECTED_DATE",                 limit: 65535
    t.text    "QUOTED_DATE",                   limit: 65535
    t.text    "QUOTED_MONTH",                  limit: 65535
    t.text    "QUOTED_DAY",                    limit: 65535
    t.integer "QUOTED_YEAR",                   limit: 4
    t.text    "BOUND_DATE",                    limit: 65535
    t.text    "PENDING_DATE",                  limit: 65535
    t.integer "PENDING_AGING_DAYS",            limit: 4
    t.integer "POLICY_PREMIUM",                limit: 4
    t.text    "REJECT_REASON",                 limit: 65535
    t.text    "SUB_REJECT_REASON",             limit: 65535
    t.text    "POL_EFF_DT",                    limit: 65535
    t.text    "POL_EXP_DT",                    limit: 65535
    t.text    "PREVIOUS_POLICY_NUM",           limit: 65535
    t.text    "BDP_RENEW_FLAG",                limit: 65535
    t.text    "PROGRAM",                       limit: 65535
    t.text    "PREMIUM_BAND",                  limit: 65535
    t.text    "CLAIM_COUNT",                   limit: 65535
    t.text    "LOSS_INCRD",                    limit: 65535
    t.text    "LOSS_PAID",                     limit: 65535
    t.text    "EXP_INCRD",                     limit: 65535
    t.text    "EXP_PAID",                      limit: 65535
    t.integer "QUOTED_PREMIUM",                limit: 4
    t.text    "USERROLE",                      limit: 65535
    t.text    "INSURED_NAME",                  limit: 65535
    t.text    "UW_REGION",                     limit: 65535
    t.text    "MINIMUM_PREMIUM_FLAG",          limit: 65535
    t.text    "MINIMUM_PREMIUM",               limit: 65535
    t.text    "MINIMUM_OVERRIDE_PREMIUM_FLAG", limit: 65535
    t.text    "MINIMUM_OVERRIDE_PREMIUM",      limit: 65535
    t.text    "AGENT_CONTACT",                 limit: 65535
    t.text    "ISSUE_DT",                      limit: 65535
    t.text    "INSURED_STATE",                 limit: 65535
    t.text    "ENDORSEMENT_PREMIUM",           limit: 65535
    t.text    "UNDERWRITER_ASSISTANT",         limit: 65535
    t.text    "QUOTE_START_DATE",              limit: 65535
    t.integer "RECEIVED_TO_EFF_DAY",           limit: 4
    t.text    "QUOTED_PREMIUM_BAND",           limit: 65535
  end

end

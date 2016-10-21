class Api::SearchController < ApplicationController
  def index
    @submissionanalytics = Submissionanalytics
      .where(agentName)
      .where(insuredName)
      .where(underwriterName)
      .where(minQuoteDate)
      .where(maxQuoteDate)
      .order(sortBy)
      .offset(offSet)
      .limit(10)

    render :index
  end

  private

  def offSet
    return 0 if !params['page']
    return 10 * params['page'].to_i
  end

  def sortBy
    sort_by = params['sort'] ? params['sort'].to_sym : :RECEIVED_DATE
    return sort_by
  end

  def agentName
    name = (params['agent'] != "") ? ["AGENT_NAME LIKE ?", "%#{params['agent']}%"] : ""
    return name
  end

  def insuredName
    name = (params['insuredName'] != "") ? ["INSURED_NAME LIKE ?", "%#{params['insuredName']}%"] : ""
    return name
  end

  def underwriterName
    name = (params['underwriterName'] != "") ? ["UNDERWRITER_NAME LIKE ?", "%#{params['underwriterName']}%"] : ""
    return name
  end

  def minQuoteDate
    date = (params['minQuoteDate'] != "") ? "QUOTED_DATE >= #{params['minQuoteDate']}" : ""
    return date
  end

  def maxQuoteDate
    date = (params['maxQuoteDate'] != "") ? "QUOTED_DATE <= #{params['maxQuoteDate']}" : ""
    return date
  end

end
